import { useEffect, useState } from 'react';
import { createRoot } from "react-dom/client";
import { supabase } from "./supabaseClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import { Games, GameRouters } from "./pages/Games";
import Photography from "./pages/Photography";
import Speedrunning from "./pages/Speedrunning";
import Coding from "./pages/Coding";
import NoPage from "./pages/NoPage";
import type { Session } from "@supabase/supabase-js";

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      if (session) {
        setSession(session)
      } else {
        setSession(null)
      }
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="bio" element={<Bio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />}/>
            <Route path="games" element={<Games />} />
              {GameRouters({})}
            <Route path="photography" element={<Photography />} />
            <Route path="speedrunning" element={<Speedrunning />} />
            <Route path="coding" element={<Coding />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <App />
);
