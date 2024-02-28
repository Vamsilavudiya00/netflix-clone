import React from "react";
import "../styles/navbar.css";
import NetflixLogo from "../assets/images/netflix-logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <img src={NetflixLogo} alt="netflix logo" />
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>New & Popular</span>
        <span>My List</span>
        <span>Browse By Languages</span>
        
      </div>
      <div className="navbar_right">
        <span>kids</span>
        <span>kids</span>
        <span>DVD</span>
        <span>kids</span>
        <span>kids</span>
      </div>
    </div>
  );
};

export default NavBar;
