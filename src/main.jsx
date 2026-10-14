import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { Toaster } from "./components/ui/toast.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster richColors position="top-right" />
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
