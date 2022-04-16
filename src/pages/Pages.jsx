import Home from "./Home";
import Cuisinetype from "./Cuisinetype";
import Cuisine from "./Cuisine";
import { Routes, Route, useLocation } from "react-router-dom";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import SearchedDefault from "../components/SearchedDefault";

function Pages() {
  const location = useLocation();
  return (
    // in path ':' used for params
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/searched/" element={<SearchedDefault />} /> */}
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/cuisine/:type" element={<Cuisinetype />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
