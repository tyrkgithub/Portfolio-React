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
              a="gitHub"
              p="Please visit my gitHub repository to check out some code"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="LinkedIn"
              href="https://linkedin.com/in/tyrk"
              a="LinkedIn"
              p="Follow me on LinkedIn to keep up with my latest projects"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Email"
              href="mailto: tyrkpages@outlook.com"
              a="Email"
              p="You can also email me if you would like to connect"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
