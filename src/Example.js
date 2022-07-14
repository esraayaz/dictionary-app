import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="examples">
        <span>
          <em>
            <strong className="two-strong">Example :</strong> {props.example}
          </em>
        </span>
      </div>
    );
  } else {
    return null;
  }
}
