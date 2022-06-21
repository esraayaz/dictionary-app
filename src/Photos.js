import React from "react";
import PlusPhotos from "./PlusPhotos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <aside className="photos">
        <div className="column">
          {" "}
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-5" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} alt="" className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </aside>
    );
  } else {
    return null;
  }
}
