import Navbar from "@/components/Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="px-6 pt-6">{children}</main>
    </>
  );
};

export default Layout;
