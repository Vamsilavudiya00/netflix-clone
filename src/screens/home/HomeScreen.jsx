import React from "react";
import "./homescreen.css";
import NavBar from "../../components/NavBar";
import HeaderCarousel from "../../components/HeaderCarousel";
import SectionCart from "../../components/SectionCart";

const HomeScreen = () => {
  return (
    <div>
      <NavBar />
      <HeaderCarousel />
      <SectionCart />
      <SectionCart />
      <SectionCart />
    </div>
  );
};

export default HomeScreen;
