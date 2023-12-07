import { Route, Routes } from "react-router-dom";

export const PropertyRoutes = () => {
  return (
    <Routes>
      <Route index element={<div>Property</div>} />
    </Routes>
  );
};
