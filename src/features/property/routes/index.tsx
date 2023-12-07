import { Route, Routes } from "react-router-dom";
import { PropertyList } from "./PropertyList";

export const PropertyRoutes = () => {
  return (
    <Routes>
      <Route index element={<PropertyList />} />
    </Routes>
  );
};
