import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import space from '../assets/img/space.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/iconmonstr-script-5.svg';
import navIcon4 from '../assets/img/iconmonstr-script-6.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

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
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={space} alt="space" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link
  href="#home"
  className={`${activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} navbar-link-offset`}
  onClick={() => onUpdateActiveLink('home')}
>
  Home
</Nav.Link>
<Nav.Link
  href="#skills"
  className={`${activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} navbar-link-offset`}
  onClick={() => onUpdateActiveLink('skills')}
>
  Skills
</Nav.Link>
<Nav.Link
  href="#experience"
  className={`${activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} navbar-link-offset`}
  onClick={() => onUpdateActiveLink('experience')}
>
  Experience
</Nav.Link>
<Nav.Link
  href="#projects"
  className={`${activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} navbar-link-offset`}
  onClick={() => onUpdateActiveLink('projects')}
>
  Projects
</Nav.Link>
<Nav.Link
  href="#education"
  className={`${activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} navbar-link-offset`}
  onClick={() => onUpdateActiveLink('education')}
>
  Education
</Nav.Link>
<Nav.Link
  href="#connect"
  className={`${activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} navbar-link-offset`}
  onClick={() => onUpdateActiveLink('connect')}
>
  Contact
</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/bernard-swanepoel-a2777322b/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/XoXoTheFrozenFox"><img src={navIcon2} alt="" /></a>
                <a href="https://xoxothefrozenfox.github.io/BernardSwanepoelCV/Index.html"><img src={navIcon4} alt="" /></a>
                <a href="https://github.com/XoXoTheFrozenFox/react-personal-portfolio/blob/master/public/files/Bernard_Swanepoel_Resume.pdf"><img src={navIcon3} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
