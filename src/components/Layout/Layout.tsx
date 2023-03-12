import Navbar from "@/components/Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="min-h-screen bg-gray-100 px-6 py-3">{children}</main>
    </div>
  );
};

export default Layout;
