import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../components/Home";
import Result from "../components/Result";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
