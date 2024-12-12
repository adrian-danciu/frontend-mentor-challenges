import { useState } from "react";
import closeIcon from "../../assets/icon-close.svg";
import facebook from "../../assets/icon-facebook.svg";
import hamburgerIcon from "../../assets/icon-hamburger.svg";
import twitter from "../../assets/icon-twitter.svg";
import logo from "../../assets/logo-bookmark.svg";
import logoNav from "../../assets/logo_bookmark_mobile.svg";

import { navbarLinks } from "../../constants";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden block">
      <div className="flex justify-between items-center bg-white mt-10 mx-8 h-6">
        <img
          src={logo}
          alt="logo-bookmark"
          style={{ display: isOpen ? "none" : "block" }}
        />
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          style={{ display: isOpen ? "none" : "block" }}
        >
          <img src={hamburgerIcon} />
        </button>
      </div>

      <div
        className={`fixed z-20 top-0 left-0 w-full h-[101%] bg-darkText text-white flex flex-col items-center justify-start transition-transform duration-300 opacity-[97%] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex w-full justify-between items-center pt-10 px-8 mb-10">
          <img src={logoNav} alt="logo-bookmark" />
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <img src={closeIcon} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center text-lg w-full mx-8">
          {navbarLinks.map((link) => (
            <a
              className="text-white text-xl font-normal uppercase w-[80%] border-t border-b border-gray-300 border-opacity-50 py-5 font-rubik text-center"
              href={link.path}
              key={link.name}
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <button
            className="px-6 py-2 mt-6 w-10/12 border border-white rounded-md"
            onClick={toggleMenu}
          >
            Login
          </button>
        </nav>

        <div className="absolute bottom-12 flex gap-10">
          <a href="#" onClick={toggleMenu}>
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#" onClick={toggleMenu}>
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
