//File: src/components/layout/Sidebar.jsx
import React from 'react';
import './Layouts.css';
const Sidebar = () => {
  return (

    <aside className="sidebar">
        <div className="sidebar-brand">
            <a href="/" className="sidebar-item">
                <img src="/logo.png" alt="Logo" />
            </a>
        </div>
        <div className="sidebar-menu">
            <div className="sidebar-start">
                <a href="/home" className="sidebar-item">Home</a>
                <a href="/about" className="sidebar-item">About</a>
                <a href="/contact" className="sidebar-item">Contact</a>
            </div>  
            <div className="sidebar-end">   
                <a href="/login" className="sidebar-item">Login</a>
                <a href="/signup" className="sidebar-item">Sign Up</a>
            </div>
        </div>
    </aside>
  );
}

export default Sidebar;
