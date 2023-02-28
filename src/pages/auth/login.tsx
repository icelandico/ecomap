import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import { PasswordInput, TextInput, Title } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import router from "next/router";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password too short" })
    .refine(
      (value) => /^.*[!#$@%&?_].*$/.test(value),
      "Must contain special character: !#$@%&?_"
    ),
});

const Login: NextPage = () => {
  const form = useForm({
    validate: zodResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data) => {
    const signInResponse = await signIn("ecomap", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/dashboard",
    });

    if (signInResponse?.error) console.log(signInResponse?.error);
    if (signInResponse?.ok) {
      router.push(signInResponse?.url);
    }
  };

  return (
    <div className="m-0 m-auto flex w-1/5 flex-col items-center justify-center">
      <Title className="mb-4" order={2}>
        Login
      </Title>
      <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
        <TextInput
          className="mb-4 w-full"
          icon={<IconAt />}
          label="Your email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          className="mb-4 w-full"
          icon={<IconLock />}
          label="Your password"
          {...form.getInputProps("password")}
        />
        <Button type="submit" className="mt-6 w-full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
