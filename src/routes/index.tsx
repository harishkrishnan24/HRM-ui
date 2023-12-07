import { lazyImport } from "@/utils/lazyImport";
import { useRoutes, Navigate } from "react-router-dom";

const { PropertyRoutes } = lazyImport(
  () => import("@/features/property"),
  "PropertyRoutes"
);

export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/property/*",
      element: <PropertyRoutes />,
    },
    { path: "/", element: <Navigate to="/property" /> },
  ]);

  return element;
};
