import { Button, Text } from "@mantine/core";
import Link from "next/link";
import { IconTrees } from "@tabler/icons-react";
import { themeColors } from "@/styles/colors";

const Navbar = () => {
  return (
    <div className="sticky top-0 right-0 left-0 z-10 flex h-16 items-center justify-between bg-white px-6 shadow-md">
      <div className="flex items-center">
        <IconTrees size={45} color={themeColors?.primaryGreen} />
        <Text className="ml-3">EcoMap</Text>
      </div>
      <div className="flex justify-between">
        <Link href="/auth/login">
          <Button className="m-2">Log in</Button>
        </Link>
        <Link href="/auth/register">
          <Button className="m-2">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
