import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="logo">ABHISHEK BUBANE</h1>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li><a href="#works">WORKS</a></li>
            <li><a href="#playbook">PLAYBOOK</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#socials">SOCIALS</a></li>
          </ul>
        </div>
        <div>
          <button className="call-button">Book a Call</button>
        </div>
      </nav>
      <div className="home-part">
        <div className="tag-line">
          <h5 className="tought">Designing Digital Experiences, Delivering Excellence</h5>
        </div>
        <div className="main">
          <h1 className="heading">UI/UX & WEB DEVELOPER</h1>
        </div>

      </div>
    </div>


  );
};

export default Home;
