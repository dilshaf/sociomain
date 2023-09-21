import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>

    
  </>
);

