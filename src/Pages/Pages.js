import React from "react";
import Home from "./Home";
import Cusine from "./Cusine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exiteBeforeEnter>
      <div className="pages">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Cusine/:type" element={<Cusine />} />
          <Route path="/Searched/:search" element={<Searched />} />
          <Route path="/Recipe/:id" element={<Recipe />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default Pages;
