import { Button, Text } from "@mantine/core";
import { IconLogout, IconTrees } from "@tabler/icons-react";
import { themeColors } from "@/styles/colors";
import { useSession } from "next-auth/react";
import LinkButton from "../Buttons/LinkButton";
import { IconUser, IconLogin } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 right-0 left-0 z-10 flex h-16 items-center justify-between bg-white px-6 shadow-md">
      <div className="relative flex cursor-pointer items-center">
        <Link href={"/"} className="absolute top-0 left-0 right-0 bottom-0" />
        <IconTrees size={45} color={themeColors?.primaryGreen} />
        <Text className="ml-3">EcoMap</Text>
      </div>
      <div className="flex items-center justify-between">
        {!session && (
          <>
            <LinkButton
              text={"Login"}
              route={"/auth/login"}
              rightIcon={<IconLogin />}
            />
            <LinkButton text={"Register"} route={"/auth/register"} />
          </>
        )}
        {session && (
          <>
            <LinkButton
              text={"Profile"}
              route={"/dashboard"}
              leftIcon={<IconUser />}
            />
            <Button
              title={"Sign Out"}
              rightIcon={<IconLogout />}
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
