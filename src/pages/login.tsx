import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { Input, Text, Title } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";

import { api } from "@/utils/api";
import { Button } from "@mantine/core";

const Login: NextPage = () => {
  return (
    <div className="m-0 m-auto flex w-1/5 flex-col items-center justify-center">
      <Title className="mb-4" order={2}>
        Login
      </Title>
      <Input
        className="mb-4 w-full"
        icon={<IconAt />}
        placeholder="Your email"
      />
      <Input
        className="mb-4 w-full"
        icon={<IconLock />}
        placeholder="Your password"
      />
      <Button className="mt-6 w-full">Next</Button>
    </div>
  );
};

export default Login;
