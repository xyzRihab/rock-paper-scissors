import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../components/Home";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
