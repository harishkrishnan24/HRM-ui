import { BottomNavBar, TopNavBar } from "../NavBar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <TopNavBar />
      <main className="container mx-auto my-4">{children}</main>
      <BottomNavBar />
    </>
  );
};
