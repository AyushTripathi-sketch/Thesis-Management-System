import React from "react";
import "./ProgStyle.css";

// This React Functional Component takes two properties:
// 1) steps: an array of the labels of the steps involved
// 2) accomplished: the number of steps that have already been accomplished

function StepProgressComponent(props) {
  const listItems = props.steps.map((step, index) => (
    <li
      className={
        props.accomplished >= index + 1 ? "accomplished" : "unaccomplished"
      }
      style={{ width: `${100 / props.steps.length}%` }}
    >
      {step}
    </li>
  ));
  return (
    <div className="container">
      <ul className="progressBar">{listItems}</ul>
    </div>
  );
}

export default StepProgressComponent;
