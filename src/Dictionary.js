import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f917000010000014d2f6caba4444513a023ba178cfcc2e4";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <section className="dictionary">
      <h1>What are you looking for?</h1>
      <div className="search">
        <form onSubmit={search} className="form">
          <input
            type="search"
            placeholder="Search"
            className="form-control"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          <strong>Suggested Words:</strong> sunset, mountain, yoga, plant...
        </div>
      </div>
      <Photos photos={photos} />
      <Results results={results} />
    </section>
  );
}
