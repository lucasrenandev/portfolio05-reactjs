import { useState } from "react";
import { Header, Logo, NavBar, NavList,
List, NavLink, HeaderBtn, SignUp, SignIn, MenuIcon } from "./styled";
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import { HashLink as Link } from "react-router-hash-link"
import { useRef } from "react";
import { useEffect } from "react";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(BiMenu)
    const navRef = useRef(null)

    const toggleMenu = () => {
        if(navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        }
        else {
            navRef.current.classList.add("active")
            setMenuIcon(IoClose)
        }
    }

    const hidleMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active")
            setMenuIcon(BiMenu)
        })
    }

    useEffect(hidleMenu)

    return(
        <Header>
            <Logo href="/">P.<span>folio</span></Logo>
            <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>

            <NavBar ref={navRef} onScroll={hidleMenu}>
                <NavList>
                    <List><Link smooth to={"#home"}><NavLink>Home</NavLink></Link></List>
                    <List><Link smooth to={"#about"}><NavLink>About</NavLink></Link></List>
                    <List><Link smooth to={"#services"}><NavLink>Services</NavLink></Link></List>
                    <List><Link smooth to={"#portfolio"}><NavLink>Portfolio</NavLink></Link></List>
                    <List><Link smooth to={"#blog"}><NavLink>Blog</NavLink></Link></List>
                    <List><Link smooth to={"#contact"}><NavLink>Contact</NavLink></Link></List>
                </NavList>
            </NavBar>

            <HeaderBtn>
                <SignUp href="#">Sign up</SignUp>
                <SignIn href="#">Sign in</SignIn>
            </HeaderBtn>
        </Header>
    )
}