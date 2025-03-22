import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../assets/duck-logo.png";
import "../css/header.css";

export default function Header() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className={`App-header ${isHomePage ? "home-page" : ""}`}>
      <div className="left">
        <img src={logo} alt="duck" />
        <a href="/" className="pixelify-sans">Quack Track</a>
      </div>
      <nav className="right">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/upload-image">Team</a></li>
          <li><a href="/">Chat</a></li>
        </ul>
      </nav>
    </div>
  );
}
