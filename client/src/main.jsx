import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CourseContextProvider from "./CourseContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CourseContextProvider>
      <App />
    </CourseContextProvider>
  </StrictMode>
);
