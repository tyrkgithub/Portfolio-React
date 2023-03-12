import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <a className="card-img-top">{props.a}</a>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.p}</p>
        <a
          target="_blank"
          href={props.href}
          className="btn btn-outline-success"
        >
          {props.a}
        </a>
      </div>
    </div>
  );
};

export default Card;
