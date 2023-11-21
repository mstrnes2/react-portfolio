import React, { useState, useEffect } from 'react';
import '../index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    // Show the navbar when the user is actively moving the mouse
    const handleMouseMove = () => {
        setNavVisible(true);
    };

    // Hide the navbar after a certain period of inactivity
    useEffect(() => {
        let timeoutId;

        const handleMouseLeave = () => {
            clearTimeout(timeoutId);

            // Set a timeout to hide the navbar after 3 seconds of inactivity
            timeoutId = setTimeout(() => {
                setNavVisible(false);
            }, 3000); // Adjust the timeout duration as needed
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {navVisible && (
                <Navbar
                    expand="lg"
                    className="nav-bar"
                    onMouseEnter={() => setNavVisible(true)}
                    onMouseLeave={() => setNavVisible(false)}
                >
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
                            <h1 className="navName">Molly Starnes</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navLinks ms-auto">
                                <NavLink to="/" label="Home" />
                                <NavLink to="/About" label="About" />
                                <NavLink to="/Portfolio" label="Portfolio" />
                                <NavLink to="/Resume" label="Resume" />
                                <NavLink to="/Contact" label="Contact" />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </>
    );
}

const NavLink = ({ to, label }) => {
    const currentPage = useLocation().pathname;

    return (
        <Link
            to={to}
            className={`nav-link ${currentPage === to ? 'active' : ''}`}
            aria-current={currentPage === to ? 'page' : undefined}
        >
            {label}
        </Link>
    );
};

export default NavTabs;