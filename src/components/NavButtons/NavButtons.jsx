import "./NavButtons.css";
import NavButton from "./NavButton";
import { useWindowsNav } from "../../contexts/WindowsNavContext";

const NavButtons = () => {
  const { toggleWindow } = useWindowsNav();

  return (
    <div className="NavButtons">
      <NavButton
        img={"/nav-icons/about.png"}
        onToggle={() => toggleWindow("about")}
      />
      <NavButton
        img={"/nav-icons/art.png"}
        onToggle={() => toggleWindow("art")}
      />
      <NavButton
        img={"/nav-icons/code.png"}
        onToggle={() => toggleWindow("code")}
      />
    </div>
  );
};

export default NavButtons;
