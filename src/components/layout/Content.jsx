import React from "react";
import "./Content.css";

import { Routes, Route } from "react-router-dom";

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";

export default function Content() {
  return (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
      </Routes>
    </main>
  );
}
