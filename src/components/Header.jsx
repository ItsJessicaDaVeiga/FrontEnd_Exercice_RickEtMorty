import {NavLink} from "react-router-dom";
import searchIcon from "/loupev1.png";
import logo from "/logo.png";
import menuIcon from "/open-menu.png";
import { useState } from "react";



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

        <div className="grow flex justify-center">
          <input className="grow py-1 px-3 rounded-l-full" placeholder=" Morty " />
          <button className="px-4 rounded-r-full bg-mint text-wrap "><img className="h-3" src={searchIcon}/> </button>
        </div>

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