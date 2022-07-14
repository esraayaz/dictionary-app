import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetic(props) {
  if (props.phonetic.audio === "") {
    return null;
  } else {
    return (
      <header className="phonetics">
        <div className="Phonetic">
          <ReactAudioPlayer
            src={props.phonetic.audio}
            controlsList={"nodownload"}
            controls
            className="sound"
          />
          <div className="text">{props.phonetic.text}</div>
        </div>
      </header>
    );
  }
}
