import React from "react";

function Projects({ image, name }) {
  return (
    <div className="projects">
      <div style={{ backgrounImage: `url($(image))` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default Projects;