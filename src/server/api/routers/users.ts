import { z } from "zod";
import bcrypt from "bcryptjs";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const hashPassword = (pass: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
};

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: hashPassword(input.password),
        },
      });
    }),
});
