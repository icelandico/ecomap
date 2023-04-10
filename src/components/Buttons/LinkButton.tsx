import { Button, ButtonProps } from "@mantine/core";
import Link from "next/link";

interface ILinkButton extends ButtonProps {
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
    <Link href={route}>
      <Button
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className="m-2"
        {...props}
      >
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
