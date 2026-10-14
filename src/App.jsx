import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import useAuth from "./hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import AppLayout from "./layouts/AppLayout";

const App = () => {
  const { token, onLogout } = useAuth();

  const ProtectedRoutes = () => {
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken.userId;

    if (!token || !userId) {
      onLogout();
      return <Navigate to="/login" />;
    }

    if (decodedToken && decodedToken.exp) {
      const currentDate = Date.now() / 1000;

      if (currentDate > decodedToken.exp) {
        onLogout();
        return <Navigate to="/login" />;
      }
    }

    return <AppLayout />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          {/* <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
