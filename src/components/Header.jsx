import {NavLink} from "react-router-dom";

import logo from "/logo.png";
import menuIcon from "/open-menu.png";
import { useState } from "react";
import SearchBar from "./SearchBar";



export default function Headers () {
// Mes liens de navigation
  const NavLinks = () => {
    return (
      <>
        <NavLink to="/list">Liste des personnages </NavLink>
        <NavLink to="/Techno">Techno utilisées </NavLink>
      </>
    )
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="p-1">
      <div className="flex flex-col sm:flex-row m-5 items-center px-12 py-5 gap-5 bg-purple-300 rounded-full">
        
        <div className="font-semibold">
          <NavLink to="/">
            <img className="h-12" src={logo} alt="Rick & Morty" />
          </NavLink>
        </div>

        <SearchBar />

        <div className=" hidden md:flex gap-6">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar}> <img className="h-8" src={menuIcon}/> </button>
        </div>

      </div>
    </div>
  )
}