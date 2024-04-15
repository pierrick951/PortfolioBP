import { useState } from "react";
import burger from '../../assets/burger.svg'
import close from '../../assets/close.svg'
import logo from '../../assets/logo.svg'
import './Navbar.css'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    function handleClick() {
        setShowMenu(!showMenu)
    }






    return (
        <nav>
            <a href="#" className="nav-ico">
                <img src={logo} alt="go to home" />
            </a>
            <div className="mainNavlinks">
                <button
                    onClick={() => handleClick()}
                    className="BurgerToggle">
                    <img
                        src={showMenu ? close : burger} alt="ouverture du menu" />
                </button>

                <div className={`${showMenu ? "open" : ""}   NavLinks`}>

                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>


            </div>
        </nav>
    )
}