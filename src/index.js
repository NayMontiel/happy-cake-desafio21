import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Contacto from "./routes/Contacto";
import Home from "./routes/Home";
import Error404 from "./routes/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="contacto" element={<Contacto />}/>
            <Route path="*" element={<Error404 />}/>
          </Route>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);
