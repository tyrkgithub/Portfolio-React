import React from "react";
import Projects from "../../Components/Projects/projects";
import { projectList } from "../../Components/ProjectList/projectList";
import "../Gallery/gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h1>Application Gallery</h1>
      <div className="projectList">
        {projectList.map(() => {
          return <Projects />;
        })}
      </div>
    </div>
  );
}

export default Gallery;
