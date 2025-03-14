import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./main.scss";
import ThemeToggle from "./components/toogle_theme"; // Import du composant ThemeToggleÒ

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <ThemeToggle /> {/* Ajout du composant ThemeToggle */}
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);