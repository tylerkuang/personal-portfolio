import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import linkedinIcon from '../assets/img/linkedin.svg';
import facebookIcon from '../assets/img/facebook.svg';
import githubIcon from '../assets/img/github.svg';

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

    const handleGitClick = async (e) => {
        // Prevent the default action to allow time to log the click
        e.preventDefault();
    
        // Log the click to your server
        await fetch('/api/track-visit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ path: '/github' }),
        });
    
        // Allow time for the fetch to complete before opening the link
        setTimeout(() => {
            // Redirect to the external link in a new tab
            window.open('https://github.com/tylerkuang', '_blank', 'noopener,noreferrer');
        }, 100); // Delay to ensure fetch completes
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://linkedin.com/in/tyler-kuang/" target="_blank"><img src={linkedinIcon} alt="" /></a>
                        <a href="https://facebook.com/tyler.kuang.7" target="_blank"><img src={facebookIcon} alt="" /></a>
                        <a href="https://github.com/tylerkuang" onClick={handleGitClick} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => window.location.href='#connect'}><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}