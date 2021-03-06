import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";
import AutoCompleteBox from "./AutoCompleteBox";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);

  const onSelect = () => {
    console.log("On Item Select");
  };

  // API Call
  const getResponse = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/?name=rick"
    );

    let result = response.data.results;
    setItems(result);
  };

  useEffect(() => {
    !items.length && getResponse();
  });

  return (
    <div className="App">
      <h1>Auto Complete Suggestion Box</h1>
      <ErrorBoundary>
        <AutoCompleteBox items={items} onSelect={onSelect} />
      </ErrorBoundary>
    </div>
  );
}
