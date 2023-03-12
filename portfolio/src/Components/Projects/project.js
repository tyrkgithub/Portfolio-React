import React from "react";
import "./project.css";

const Project = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.p}</p>
        <ul>{props.li}</ul>
        <a
          target="_blank"
          href={props.href}
          className="btn btn-outline-success"
        >
          View Application
        </a>
      </div>
    </div>
  );
};

export default Project;
