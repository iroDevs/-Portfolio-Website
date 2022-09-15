import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState,useEffect} from 'react'
import Logo from '../assets/img/logo2.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon4 from '../assets/img/nav-icon4.svg'


function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scroled , setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    })

    function onUpdateActiveLink(linkName){
        setActiveLink(linkName)
    }

  return (
    <Navbar bg="light" expand="lg" className={scroled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><img width="100px" height="60px" src={Logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("home")} >Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("skills")} >Habilidades</Nav.Link>
            <Nav.Link href="#projects"  className={activeLink === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink("projects")} >Projetos</Nav.Link>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href='#'><img src={navIcon1}></img></a>
                    <a href='#'><img  src={navIcon4}></img></a>
                </div>
                <button className="btn-contact" onClick={()=> console.log("clicado")}>
                Contato
                </button> 
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;