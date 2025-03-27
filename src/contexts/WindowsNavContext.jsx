import { createContext, useState, useEffect, useContext } from "react";

const WindowsNavContext = createContext();

export const WindowsNavProvider = ({ children }) => {
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
