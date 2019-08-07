import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from "./infinite-scroll/List";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Infinite Scroll React Hook</h1>
      </div>
      <List />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
