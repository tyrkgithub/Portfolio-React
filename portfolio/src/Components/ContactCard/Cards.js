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
            <Card
              title="gitHub"
              href="https://github.com/tyrkgithub"
              a={FaGithub}
            />
          </div>
          <div className="col-md-4">
            <Card title="LinkedIn" href="https://linkedin.com/in/tyrk" />
          </div>
          <div className="col-md-4">
            <Card title="Email" href="mailto: tyrkpages@outlook.com" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
