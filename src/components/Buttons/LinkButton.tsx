import { Button } from "@mantine/core";
import Link from "next/link";

interface ILinkButton {
  route: string;
  text: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const LinkButton = ({
  route,
  text,
  rightIcon,
  leftIcon,
  ...props
}: ILinkButton) => {
  return (
    <Link href={route} {...props}>
      <Button leftIcon={leftIcon} rightIcon={rightIcon} className="m-2">
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
