import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="project/:id" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}
