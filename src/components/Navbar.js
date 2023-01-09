import { useEffect, useState } from "react";
import { Navbar, Container, NavLink,Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gith from "../assets/img/github.png";
import linked from "../assets/img/linkedin.png";
export const NavBar= () =>{
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll =() =>{
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUdpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

 return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img className="dert" src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUdpdateActiveLink('home')}>Home</Nav.Link>
                    <NavLink href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUdpdateActiveLink('skills')}>Skills</NavLink>                
                    <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUdpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://github.com/lolki903"><img src={gith} alt="github" style={{width:"100%"}} /></a>
                        <a href="#"><img src={linked} alt="linkedin" style={{width:"100%"}} /></a>
                    </div>
                    <button className="vvd" onClick={()=>console.log("connect")}><span>Let's connect</span></button>
                </span>

            </Navbar.Collapse>
        </Container>
    </Navbar>
 )   
}