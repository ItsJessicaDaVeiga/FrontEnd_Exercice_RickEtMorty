import {NavLink} from "react-router-dom";
import searchIcone from "/loupev1.png";
import logo from "/logo.png";

export default function Headers () {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row m-5 items-center px-12 py-5 gap-5 bg-purple-300 rounded-full">
        <div className="font-semibold">
          <NavLink to="/">
            <img className="h-12" src={logo} alt="Rick & Morty" />
          </NavLink>
        </div>

        <div className="grow flex justify-center">
          <input className="grow py-1 px-3 rounded-l-full" placeholder=" Morty " />
          <button className="px-4 rounded-r-full bg-purple-400 text-wrap "><img className="h-3" src={searchIcone}/> </button>
        </div>

        <div className="flex gap-6">
          <span>
            <NavLink to="/list">Liste des personnages </NavLink>
          </span>
          <span>
            <NavLink to="/Techno">Techno utilisées </NavLink>
          </span>
        </div>
      </div>
    </div>
  )
}