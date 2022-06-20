import React from "react";

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
