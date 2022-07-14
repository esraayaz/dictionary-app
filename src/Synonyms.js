import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.lenght === 0) {
    return null;
  } else {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
              <strong className="three-strong">Synonyms :</strong> {synonym}
            </li>
          );
        })}
      </ul>
    );
  }
}
