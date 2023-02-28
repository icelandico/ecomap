import Navbar from "@/components/Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="h-full px-6 pt-6">{children}</main>
    </div>
  );
};

export default Layout;
