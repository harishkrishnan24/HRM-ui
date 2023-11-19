import Sidebar from "../navigation/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="flex flex-row">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
};

export default MainLayout;
