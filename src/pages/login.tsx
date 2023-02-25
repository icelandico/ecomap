import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { Text } from "@mantine/core";

import { api } from "@/utils/api";
import { Button } from "@mantine/core";

const Login: NextPage = () => {
    return (
        <Text>LOGIN</Text>
    );
};

export default Login;