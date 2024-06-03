import { useState } from "react";
import {Link} from 'react-router-dom'
import burger from '../../assets/burger.svg'
import close from '../../assets/close.svg'

import './Navbar.css'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    function handleClick() {
        setShowMenu(!showMenu)
    }






    return (
        <nav>
            <div className="mainNavlinks">
                <button
                    onClick={() => handleClick()}
                    className="BurgerToggle">
                    <img
                        src={showMenu ? close : burger} alt="ouverture du menu" />
                </button>

                <div className={`${showMenu ? "open" : ""}   NavLinks`}>

                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/project'>Project</Link>
                    <Link to='/contact'>Contact</Link>
                  
                </div>


            </div>
        </nav>
    )
}