import React from "react";
import "./header.css";
import Banner from "../Banner/banner";
import Navbar from "../Navbar/navBar";

function Header() {
  return (
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
    </header>
  );
}

export default Header;
