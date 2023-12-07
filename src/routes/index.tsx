import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <div>HRM</div>,
    },
  ]);

  return element;
};
