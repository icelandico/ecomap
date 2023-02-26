import { Button, Text, Image } from "@mantine/core";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 right-0  left-0 flex h-16 items-center justify-between bg-green-50 px-6 shadow-md">
      <div className="flex items-center">
        <Image
          width={45}
          radius="md"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.vectorstock.com%2Fi%2F1000x1000%2F38%2F52%2Fgreen-leaf-icon-for-vegan-bio-eco-design-vector-22893852.jpg&f=1&nofb=1&ipt=ba20d64b8c537faff181c06c51f567362d92748b0264e1661707494b8e2013f0&ipo=images"
          alt="leaf image"
        />
        <Text className="ml-3">EcoMap</Text>
      </div>
      <div className="flex justify-between">
        <Link href="/login">
          <Button className="m-2">Log in</Button>
        </Link>
        <Link href="/register">
          <Button className="m-2">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
