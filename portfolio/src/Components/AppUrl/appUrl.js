import React from "react";

const AppUrl = (props) => {
  return (
    <a target="_blank" href={props.href} className="btn btn-outline-success">
      {props.a}
    </a>
  );
};

export default AppUrl;
