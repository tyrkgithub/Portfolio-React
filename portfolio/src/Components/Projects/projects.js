import React from "react";
import Project from "./project";

import App1 from "../../Assets/colorPal.png";
import App2 from "../../Assets/colorPal.png";
import App3 from "../../Assets/colorPal.png";
import App4 from "../../Assets/colorPal.png";

function Projects() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-3">
          <Project imgsrc={App1} title="WASA" />
        </div>
        <div className="col-md-3">
          <Project imgsrc={App2} title="Bootstrap Portfolio" />
        </div>
        <div className="col-md-3">
          <Project imgsrc={App3} title="JS Knowledge Quiz" />
        </div>
        <div className="col-md-3">
          <Project imgsrc={App4} title="Passwrod Generator" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
