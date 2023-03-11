import { type NextPage } from "next";
import { Text } from "@mantine/core";
import { useSession } from "next-auth/react";

const Dashboard: NextPage = () => {
  const { data, status } = useSession();

  return (
    <div className="relative m-0 m-auto flex w-1/5 flex-col items-center justify-center">
      <Text>LOGGED IN? User: {data?.user.name}</Text>
    </div>
  );
};

export default Dashboard;
