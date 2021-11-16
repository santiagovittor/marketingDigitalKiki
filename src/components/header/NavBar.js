import { Link } from "react-router-dom"
import { Slant as Hamburger } from 'hamburger-react'
import NavBarItems from "./NavBarItems";
import { useState } from "react";
import logoKiki from "../../assets/pngs/logoKiki.png"


const NavBar = () => {

    const [navBarOpen,setNavBarOpen] = useState(false)

    const handleToggle = () =>{
        setNavBarOpen(prev => !prev)
    }


    return (
        <>
                <nav className="navBar">
                    <Link id="navBarLogo" to="/main">
                    <img src={logoKiki} alt="logoKiki"/>
                    </Link>
                    <button id="navBarToggleButton" onClick={handleToggle}><Hamburger></Hamburger></button>
                    {navBarOpen? <NavBarItems/> : <></>}
                </nav>
        </>
    )
}
export default NavBar;
