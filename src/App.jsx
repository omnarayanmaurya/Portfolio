
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "@/pages/Home";
import QuickAI from "@/pages/projects/QuickAI";
import Bazzar from "@/pages/projects/Bazzar";
import Vyavastha from "@/pages/projects/Vyavastha";

// Reset scroll position whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/quickai" element={<QuickAI />} />
        <Route path="/projects/bazzar" element={<Bazzar />} />
        <Route path="/projects/vyavastha" element={<Vyavastha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
