import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.lenght === 0) {
    return null;
  } else {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>Synonyms : {synonym}</li>;
        })}
      </ul>
    );
  }
}
