import React from "react";
import Examples from "./Examples.css";

export default function Example(props) {
  if (props.example) {
    return (
      <span>
        <em> Example : {props.example}</em>
      </span>
    );
  } else {
    return null;
  }
}
