import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">uhbhbhbhb</p>
        <a href="#" className="btn btn-outline-success">
          link
        </a>
      </div>
    </div>
  );
};

export default Card;
