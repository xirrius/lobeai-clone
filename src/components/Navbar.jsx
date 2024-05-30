import { useState } from "react";
import { logo, close, menu } from "../assets";
import { NavbarTabs } from "../constants";
import "../styles.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      // If closing the menu, trigger the slide-up animation
      setIsAnimating(true);
      setTimeout(() => {
        setToggle(false);
        setIsAnimating(false);
      }, 300); // Match the duration of slideUp animation
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      {/* LARGE SCREENS */}

      <nav className="sm:flex hidden pt-2.5 pb-3.5 md:px-12 px-3 justify-between items-center backdrop-blur-lg sticky top-0 z-10">
        <img src={logo} alt="lobe.ai-logo" className="w-[92px] h-[48px] cursor-pointer" />

        <ul className="flex justify-around">
          {NavbarTabs.map((navbarTab) => (
            <li
              key={navbarTab.id}
              className="mx-5 hover:scale-105 transition-all duration-200"
            >
              <a
                href={navbarTab.link}
                className={` hover:text-primary font-medium ${
                  navbarTab.id === "tourLink"
                    ? "text-primary"
                    : "text-secondary"
                }`}
              >
                {navbarTab.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="bg-highlight font-bold text-white rounded-full px-5 h-[40px] hover:scale-105 transition-all duration-500"
        >
          Download
        </button>
      </nav>

      {/* SMALL SCREENS */}

      <nav className="sm:hidden flex flex-col sticky top-0 z-10">
        <div className="flex justify-between py-4 px-6 backdrop-blur-custom">
          <img src={logo} alt="lobe.ai-logo" className="w-[92px] h-[48px]" />
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={handleToggle}
            className="w-4 h-4 cursor-pointer my-4"
          />
        </div>

        <div
          className={`${
            toggle ? "absolute" : "hidden"
          } flex flex-col border-t-[0.1px] px-8 pt-2 pb-10 top-full left-0 right-0 backdrop-blur-custom
          shadow-lg
          ${isAnimating ? "slide-up" : "slide-down"}`}
        >
          <ul className="mt-3 mb-4">
            {NavbarTabs.map((navbarTab) => (
              <li key={navbarTab.id} className="py-4">
                <a
                  href={navbarTab.link}
                  className={`${
                    navbarTab.id === "tourLink"
                      ? "text-primary"
                      : "text-secondary"
                  } transition-all duration-200 hover:text-primary font-medium text-lg`}
                >
                  {navbarTab.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="bg-highlight font-bold text-white rounded-full px-5 h-[40px] hover:scale-105 transition-all duration-500 mt-3"
          >
            Download
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
