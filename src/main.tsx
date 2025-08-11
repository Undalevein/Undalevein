import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Blog from "./pages/Blog";
import Games from "./pages/Games";
import Photography from "./pages/Photography";
import Speedrunning from "./pages/Speedrunning";
import Coding from "./pages/Coding";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bio" element={<Bio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="games" element={<Games />} />
          <Route path="photography" element={<Photography />} />
          <Route path="speedrunning" element={<Speedrunning />} />
          <Route path="coding" element={<Coding />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <App />
);
