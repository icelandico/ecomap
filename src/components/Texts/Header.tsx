import { Title } from "@mantine/core";

interface IHeader {
  text: string;
}

const Header = ({ text }: IHeader) => {
  return <Title order={3}>{text}</Title>;
};

export default Header;
