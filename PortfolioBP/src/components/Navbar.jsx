import { NavLink } from "react-router-dom"
import { useState } from "react"
import burger from '../assets/burger.svg'
import close from '../assets/close.svg'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true)

  return (
    

   <nav className="bg-gradient-to-r from-indigo-700 to-purple-900 w-full h-24 flex items-center justify-between ">
      <h1 className="text-white font-bold text-xl ml-10 ">Bernard Pierrick</h1>
     <div className="px-10">
       <ul className={`${
          showMenu ? "flex   " : "hidden "
        } flex-col items-start   sm:flex sm:relative sm:pb-0 tive sm:flex-row`}>
         <NavLink to="/"
         className={   ({isActive}) => `${isActive && "bg-indigo-700 rounded"}  text-white font-sans  px-4 py-2`}
         >
          Home
         </NavLink>
         <NavLink to="/about"
         className={   ({isActive}) => `${isActive && "bg-indigo-700 rounded"}  text-white font-sans  px-4  py-2`}
         >
          About
         </NavLink>
         <NavLink to="/skill"
         className={ ({isActive}) => `${isActive && "bg-indigo-700 rounded"}  text-white font-sans px-4  py-2`}
         >
             Skill
         </NavLink>
         <NavLink to="/contact"
         className={   ({isActive}) => `${isActive && "bg-indigo-700 rounded"} text-white font-sans px-4  py-2`}
         >
             Contact
         </NavLink>
       </ul>
     </div>
     <button
      onClick={() => setShowMenu(!showMenu)}
      className="ml-auto   sm:hidden">
        <img  className="w-4" src={showMenu ? close : burger} alt={showMenu ? "cacher le menu" : "Montrer le menu "} />
      </button>
   </nav>
  )
}