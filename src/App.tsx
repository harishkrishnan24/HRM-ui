import { Button } from "@components/ui/button";
import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
