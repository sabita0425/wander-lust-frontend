import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TripForm from "./components/common/TripForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tripform" element={<TripForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
