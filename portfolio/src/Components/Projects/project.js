import React from "react";
import "./project.css";

const Project = (props) => {
  return (
    <div className="card text-center justify-content-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.p}</p>
        <ul className="skills text-center">{props.li}</ul>
      </div>
    </div>
  );
};

export default Project;
