import ThemeSwitcher from "../ThemeSwitcher";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  // State to manage the current mode (light/dark)
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle the mode
  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  return (
    <div className={` w-full shadow-sm z-10`}>
      <div className="w-[80%] m-auto  flex flex-row justify-between py-4">
        <div>
          <h1 className={`text-2xl  font-bold`}>Where in the world?</h1>
        </div>
        <div className={`flex items-center gap-xl`}>
          <button
            type="button"
            className="flex flex-row gap-xl border border-gray-300 px-2  py-1 rounded shadow-md"
          >
            <ThemeSwitcher />
            <span className={`ml-2 `}>Dark Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
