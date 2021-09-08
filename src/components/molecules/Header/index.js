import React from 'react'
import './header.scss'


const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="logofs">
                    <a href="#intro" className="logo">
                        <img src="assets/img/logo.png" />
                    </a>
                </div>
                <div className="left">
                    <ul>
                        <li onClick={() => setMenuOpen(false)}>
                            <a href="#intro">Home</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <a href="#works">Works</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
