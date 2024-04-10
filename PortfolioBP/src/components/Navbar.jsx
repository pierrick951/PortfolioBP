import { Link,NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    

   <nav className="bg-gradient-to-r from-indigo-700 to-purple-900 w-full h-24 flex justify-end items-center">
     <NavLink to="/"
     className={   ({isActive}) => `${isActive && "border-b-2 border-white p-1"}  text-white`}
     >
      Home
     </NavLink>
     <NavLink to="/about"
     className={   ({isActive}) => `${isActive && "border-b-2 border-white p-1"}  text-white`}
     >
      About
     </NavLink>
     <NavLink to="/skill"
     className={ ({isActive}) => `${isActive && "border-b-2 border-white p-1"}  text-white`}
     >
    Skill
     </NavLink>
     <NavLink to="/contact"
     className={   ({isActive}) => `${isActive && "border-b-2 border-white p-1"} text-white`}
     >
    Contact
     </NavLink>
   </nav>
  )
}