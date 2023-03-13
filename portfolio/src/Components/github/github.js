import React from "react";

const GithubL = (props) => {
  return (
    <a target="_blank" href={props.href} className="btn btn-outline-success">
      {props.a}
    </a>
  );
};

export default GithubL;
