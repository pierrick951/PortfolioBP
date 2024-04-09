import { Link,NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    

   <nav className="bg-gradient-to-r from-indigo-700 to-purple-900 w-full h-24">
     <NavLink to="/"
     className={   ({isActive}) => `${isActive && "bg-slate-100 p-1 rounded"}`}
     >
      Home
     </NavLink>
     <NavLink to="/about"
     className={   ({isActive}) => `${isActive && "bg-slate-100 p-1"}`}
     >
      About
     </NavLink>
     <NavLink to="/skill"
     className={   ({isActive}) => `${isActive && "bg-slate-100 p-1"}`}
     >
    Skill
     </NavLink>
     <NavLink to="/contact"
     className={   ({isActive}) => `${isActive && "bg-slate-100 p-1"}`}
     >
    Contact
     </NavLink>
   </nav>
  )
}