import React from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
  const data = {
    color: "#efeaea",
    fontSize: "20px",
    backgroundColor: "#005980",
    borderColor: "#ddd",
    borderStyle: "solid"
  };
  return (
    <div>
      <h1 style={data}>Server Side Rendering : It’s the ability of a JavaScript application to render on the server rather than in the browser.</h1>
    </div>
  );
}

export default App;
