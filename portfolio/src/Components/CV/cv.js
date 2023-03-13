import React from "react";
import Project from "../Projects/project";
import Resume from "../../Assets/colorPal.png";

function CV() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <Project imgsrc={Resume} title="View Resume" href="" />
    </div>
  );
}

export default CV;
