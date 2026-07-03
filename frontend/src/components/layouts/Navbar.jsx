//File: src/components/layouts/Navbar.jsx
import React from 'react';
import './Layouts.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <a href="/" className="navbar-item">
                <img src="/logo.png" alt="Logo" />
            </a>
        </div>
        <div className="navbar-menu">
            <div className="navbar-start">
                <a href="/home" className="navbar-item">Home</a>
                <a href="/about" className="navbar-item">About</a>
                <a href="/contact" className="navbar-item">Contact</a>
            </div>
            <div className="navbar-end">
                <a href="/login" className="navbar-item">Login</a>
                <a href="/signup" className="navbar-item">Sign Up</a>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
