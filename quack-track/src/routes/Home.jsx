import React from 'react';
import Header from "../components/Header.jsx";
import ducks from "../assets/ducks.jpg";
import "../css/home.css";

export default function Home() {
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
          
      </div>
    </div>
  );
}