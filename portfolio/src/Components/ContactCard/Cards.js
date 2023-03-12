import React, { Component } from "react";
import Card from "./Card";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc={FaGithub} title="gitHub" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={FaLinkedin} title="LinkedIn" />
          </div>
          <div className="col-md-4">
            <Card imgsrc={FaEnvelope} title="Email" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
