import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "@/utils/api";
import { Button } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <main className="text-gray-700 shadow-md p-3 border-gray-300 ml-4 h-24 flex border-2">

    </main>
  );
};

export default Home;