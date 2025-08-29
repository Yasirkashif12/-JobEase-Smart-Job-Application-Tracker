import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// main.jsx
import './firebase'; // just to ensure it initializes when app starts


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
