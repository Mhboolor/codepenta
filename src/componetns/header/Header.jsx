"use client";

import { useState } from "react";
import Logo from "./content/Logo";
import Navbar from "./content/Navbar";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header>
      <div
        className={`fixed left-0 top-0 w-full h-full z-20 bg-black/50 ${
          showMenu ? "flex" : "hidden"
        } lg:hidden`}
        onClick={showMenuHandler}
      ></div>
      <div className="flex items-center justify-between container m-auto px-5 sm:px-0 py-6 z-30">
        <div className="flex lg:hidden">
          <button onClick={showMenuHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <Navbar showMenuHandler={showMenuHandler} showMenu={showMenu} />
        <Logo />
      </div>
    </header>
  );
}

export default Header;
