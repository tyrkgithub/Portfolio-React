import React from "react";
import CV from "../../Components/CV/cv";
import Cards from "../../Components/ContactCard/Cards";
import "./contact.css";

function Contact() {
  return (
    <div>
      <h2 className="banner text-center">Links</h2>
      <Cards></Cards>
      <h2 className="banner text-center">Resume</h2>
      <CV></CV>
    </div>
  );
}

export default Contact;
