import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header.jsx";
import Sponsors from "../components/Sponsors.jsx";
import ducks from "../assets/ducks.jpg";
import "../css/home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/upload-image');
  };
  
  return (
    <div className="home-container">
      <Header />
      <div className="image-background">
        <img src={ducks} alt="ducks"/>
        <div className="overlay-text">
            <h1> Welcome to Quack Track</h1>
            <p className="typing-animation">Your duck tracking begins here</p>
        </div>
      </div>
      <div className="home-container">
          <Sponsors/>
          <button onClick={handleClick}>Upload Duck Picture</button>
      </div>
    </div>
  );
}