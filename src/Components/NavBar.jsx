import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {AiOutlineWhatsApp} from 'react-icons/ai'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';



export default function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           <span className="title-name">Pedro FullStack</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/pedro-2001/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/iroDevs" target="_blank"><img src={navIcon4} alt="" /></a>
                
              </div>
             
              <a href=" https://api.whatsapp.com/send?phone=5532999359393&text=Olá%20tenho%20uma%20oportunidade%20para%20você..." className="zap-link" target="_blank">
                <button className="vvd"><span>Vamos conversar  <AiOutlineWhatsApp size={24}></AiOutlineWhatsApp></span></button>
              </a>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
  )
}


