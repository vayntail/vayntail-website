import { createContext, useState, useContext } from "react";
import { useWindow } from "./WindowContext";

const WindowsNavContext = createContext();

export const WindowsNavProvider = ({ children }) => {
  const { bringToFront } = useWindow();

  // initial values
  const [windows, setWindows] = useState({
    about: false,
    code: false,
    art: false,
  });

  // toggle window on and off
  const toggleWindow = (window) => {
    setWindows((prevState) => ({
      ...prevState,
      [window]: !prevState[window],
    }));
    bringToFront(window); // bring window zIndex to
    console.log(windows);
  };

  // close the current window
  const closeWindow = (window) => {
    toggleWindow(window);
  };

  return (
    <WindowsNavContext.Provider value={{ windows, toggleWindow, closeWindow }}>
      {children}
    </WindowsNavContext.Provider>
  );
};

// custom hook
export const useWindowsNav = () => useContext(WindowsNavContext);
