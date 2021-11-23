import { Link } from "react-router-dom"
import { Slant as Hamburger } from 'hamburger-react'
import NavBarItems from "./NavBarItems";
import { useState, useEffect } from "react";
import logoKiki from "../../assets/pngs/logoKikiTransparent.png"


const NavBar = () => {

    const [navBarOpen,setNavBarOpen] = useState(false)
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    
    const handleToggle = () =>{
        setNavBarOpen(prev => !prev)
    }


  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition < 1) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);



    return (
        <>
                    <nav className={!scrolling&&!navBarOpen ? "navBar" : "navBar__onScroll"}>
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
