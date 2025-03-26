import { createContext, useState, useEffect, useContext } from "react";

const WindowsNavContext = createContext();

export const WindowsNavProvider = ({ children }) => {
  // initial values
  const [windows, setWindows] = useState({
    about: false,
    code: false,
    art: false,
  });

  return (
    <WindowsNavContext.Provider value={{}}>
      {children}
    </WindowsNavContext.Provider>
  );
};

// custom hook
export const useWindowsNav = () => useContext(WindowsNavContext);
