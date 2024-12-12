import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Include styles for sliding menu

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyle = {
    width: "220px",
    height: "100vh",    
    background: "linear-gradient(180deg, #4A90E2, #A044FF)", // Blue to purple gradient
    color: "white",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
  };

  return (
    <div style={sidebarStyle} className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? "<<" : ">>"}
      </button> */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/borewell">Borewell</Link></li>
        <li><Link to="/direct-current">Direct Current</Link></li>
        <li><Link to="/overhead-tank">Overhead Tank</Link></li>
        <li><Link to="/rsi">RSI</Link></li>
        <li><Link to="/solar">Solar</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;