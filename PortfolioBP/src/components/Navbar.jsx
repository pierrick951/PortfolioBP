import { Link,NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    

   <nav className="bg-gradient-to-r from-indigo-700 to-purple-900 w-full h-24 flex items-center">
      <h1 className="text-white font-bold text-xl ml-10 ">Bernard Pierrick</h1>
     <NavLink to="/"
     className={   ({isActive}) => `${isActive && "bg-indigo-900 rounded"}  text-white font-sans  px-4`}
     >
      Home
     </NavLink>
     <NavLink to="/about"
     className={   ({isActive}) => `${isActive && "bg-indigo-900 rounded"}  text-white font-sans  px-4`}
     >
      About
     </NavLink>
     <NavLink to="/skill"
     className={ ({isActive}) => `${isActive && "bg-indigo-900 rounded"}  text-white font-sans px-4`}
     >
    Skill
     </NavLink>
     <NavLink to="/contact"
     className={   ({isActive}) => `${isActive && "bg-indigo-900 rounded"} text-white font-sans px-4`}
     >
    Contact
     </NavLink>
   </nav>
  )
}