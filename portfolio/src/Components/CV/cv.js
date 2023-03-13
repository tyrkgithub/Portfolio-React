import React from "react";
import Project from "../Projects/project";
import Resume from "../../Assets/TiaCV.png";
import Download from "./download";

function CV() {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <Project imgsrc={Resume} title="My Resume" href="" />
      </div>
      <Download />
    </div>
  );
}

export default CV;
