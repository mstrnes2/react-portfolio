import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const [navVisible, setNavVisible] = useState(true);

    const toggleNav = () => {
        setNavVisible(!navVisible);
    };

    // Hide the navbar after a certain period of inactivity
    useEffect(() => {
        let timeoutId;

        const handleMouseMove = () => {
            setNavVisible(true); // Show the navbar
            clearTimeout(timeoutId);

            // Set a timeout to hide the navbar after 3 seconds of inactivity
            timeoutId = setTimeout(() => {
                setNavVisible(false);
            }, 3000); // Adjust the timeout duration as needed
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            {navVisible && (
                <Navbar expand="lg" className="bg-body-tertiary" onMouseEnter={() => setNavVisible(true)} onMouseLeave={() => setNavVisible(false)}>
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
                            <h1>Molly Starnes</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
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