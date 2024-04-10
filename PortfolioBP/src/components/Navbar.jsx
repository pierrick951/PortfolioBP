import { NavLink } from "react-router-dom";
import { useState } from "react";
import burger from '../assets/burger.svg';
import close from '../assets/close.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-900 w-full h-24 flex items-center justify-between">
      <h1 className="text-white font-bold text-xl ml-10">Bernard Pierrick</h1>
      <div className="px-10 hidden sm:block">
        <ul className="flex flex-row">
          <NavLink
            to="/"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/skill"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            Skill
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </ul>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto sm:hidden"
      >
        <img
          className="w-6 mr-5"
          src={showMenu ? close : burger}
          alt={showMenu ? "Cacher le menu" : "Montrer le menu"}
        />
      </button>
      {showMenu && (
        <div className="fixed top-0 right-0 h-full w-full bg-gradient-to-b from-indigo-700 to-purple-900 flex flex-col items-center justify-center z-10">
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-5 right-5"
          >
            <img
              className="w-6 mr-1 mt-4"
              src={close}
              alt="Fermer le menu"
            />
          </button>
          <NavLink
            to="/"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/skill"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            Skill
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white font-sans px-4 py-2"
            activeClassName="bg-indigo-700 rounded"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
