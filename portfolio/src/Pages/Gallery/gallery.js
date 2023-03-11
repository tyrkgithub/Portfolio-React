import React from "react";
import Projects from "/Users/tia/Desktop/bootcamp/week-thirteen/Portfolio-React/portfolio/src/Components/Projects/projects.js";
import { projectList } from "/Users/tia/Desktop/bootcamp/week-thirteen/Portfolio-React/portfolio/src/Components/ProjectList/projectList.js";
import "/Users/tia/Desktop/bootcamp/week-thirteen/Portfolio-React/portfolio/src/Pages/Gallery/gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h1>Application Gallery</h1>
      <div className="projectList">
        {projectList.map((gallery) => {
          return <Projects name={gallery.name} image={gallery.image} />;
        })}
      </div>
    </div>
  );
}

export default Gallery;
