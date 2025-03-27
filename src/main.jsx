import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ScreenOrientationProvider } from "./contexts/ScreenOrientationContext.jsx";
import { WindowsNavProvider } from "./contexts/WindowsNavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScreenOrientationProvider>
      <WindowsNavProvider>
        <App />
      </WindowsNavProvider>
    </ScreenOrientationProvider>
  </StrictMode>
);
