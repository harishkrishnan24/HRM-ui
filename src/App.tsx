import { AppRoutes } from "@/routes";
import { AppProvider } from "@/providers/app";
import { MainLayout } from "@/components/Layout";

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </AppProvider>
  );
}

export default App;
