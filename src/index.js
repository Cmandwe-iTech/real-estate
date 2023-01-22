import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basicinfo from "./Components/basicinfo";
import Generalinfo from "./Components/generalinfo";
import Homepage from "./Components/homepage";
import LocationInfo from "./Components/Locationinfo";
import Login from "./Components/Login";
import Property from "./Components/property";
import Register from "./Components/Register";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/basicinfo" element={<Basicinfo />} />
        <Route path="/property" element={<Property />} />
        <Route path="/generalinfo" element={<Generalinfo />} />
        <Route path="/locationinfo" element={<LocationInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
