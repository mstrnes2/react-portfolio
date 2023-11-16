import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function NavTabs() {
    const currentPage = useLocation().pathname;
    const [navVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
        setNavVisible(!navVisible)
    }
  return (
    <>
    {navVisible && (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand><h1>Molly Starnes</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link
        to="/"
        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
        Home
        </Link>
        <Link
        to="/About"
        className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
        About
        </Link>
        <Link
        to="/Portfolio"
        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
        Portfolio
        </Link>
        <Link
        to="/Resume"
        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
        Resume
        </Link>
        <Link
        to="/Contact"
        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
        Contact
        </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )}
    <button className="btn btn-primary" onClick={toggleNav}>{navVisible ? (<>Hide Nav</>):(<>Show Nav</>)}</button>
    </>
  );
}

export default NavTabs;