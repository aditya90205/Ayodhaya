import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative flex justify-center items-center w-full">
        <nav className="hidden md:block bg-white absolute top-6 md:mx-auto  p-9 rounded-xl shadow-lg">
          {/* Main Navigation (Visible on larger screens) */}
          <ul className="flex items-center justify-between gap-8 text-lg font-medium text-black">
            {/* Home Link */}
            <li className="cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 pb-1 border-b-4 border-gradient-to-r from-orange-500 to-pink-500"
                    : "hover:text-gray-500"
                }
              >
                Home
              </NavLink>
            </li>

            {/* Places to Visit Link */}
            <li className="cursor-pointer">
              <NavLink
                to="/places-to-visit"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 pb-1 border-b-4 border-gradient-to-r from-orange-500 to-pink-500"
                    : "hover:text-gray-500"
                }
              >
                Places to Visit
              </NavLink>
            </li>

            {/* Centered DivineConnect Logo */}
            <li className="text-3xl font-bold cursor-pointer">
              <img src={logo} alt="logo" className="h-7" />
            </li>

            {/* Events Link */}
            <li className="cursor-pointer">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 pb-1 border-b-4 border-gradient-to-r from-orange-500 to-pink-500"
                    : "hover:text-gray-500"
                }
              >
                Events
              </NavLink>
            </li>

            {/* Packages Link */}
            <li className="cursor-pointer">
              <NavLink
                to="/packages"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-600 pb-1 border-b-4 border-gradient-to-r from-orange-500 to-pink-500"
                    : "hover:text-gray-500"
                }
              >
                Packages
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Menu (Visible on smaller screens) */}
      <div
        className="md:hidden text-white text-2xl z-20 absolute top-4 left-4 cursor-pointer"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
      >
        {!isMenuOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Slide-out Menu for Small Screens */}
      <div className="md:hidden absolute flex justify-center items-center w-full mt-5">
         <img src={logo} alt="logo" />
      </div>
      <div
        className={`md:hidden fixed top-12 left-0 bg-slate-50 rounded-md z-10 flex flex-col items-center justify-start py-6 px-4  transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 text-lg font-medium text-black">
          <li className="cursor-pointer" onClick={toggleMenu}>
            <a href="/">
              Home
            </a>
          </li>
          <li className="cursor-pointer" onClick={toggleMenu}>
            <NavLink to="/places-to-visit" className="hover:text-gray-500">
              Places to Visit
            </NavLink>
          </li>
          <li className="cursor-pointer" onClick={toggleMenu}>
            <NavLink to="/events" className="hover:text-gray-500">
              Events
            </NavLink>
          </li>
          <li className="cursor-pointer" onClick={toggleMenu}>
            <NavLink to="/packages" className="hover:text-gray-500">
              Packages
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
