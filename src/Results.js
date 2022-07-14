import React from "react";
import Phonetic from "./Phonetic.js";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Result(props) {
  if (props.results) {
    return (
      <section className="results">
        <div className="Results">
          <section>
            <h2>{props.results.word}</h2>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
