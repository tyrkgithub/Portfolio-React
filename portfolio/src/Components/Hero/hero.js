import React from "react";
import "./hero.css";
import HeroImg from "../../Assets/colorPal.png";

function Hero() {
  return (
    <div
      className="hero text-center"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <h1 className="h1">Tia</h1>
      <h2 className="h2">Junior Web Developer</h2>
    </div>
  );
}

export default Hero;
