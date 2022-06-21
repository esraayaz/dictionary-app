import React from "react";
import Phonetic from "./Phonetic.js";
import Meaning from "./Meaning.js";

export default function Result(props) {
  if (props.results) {
    return (
      <section className="results">
        <div className="Results">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
