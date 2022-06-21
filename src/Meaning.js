import React from "react";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";
import Meanings from "./Meanings.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <section className="meaning">
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                📖 {definition.definition}
                <br />
                <Example example={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
