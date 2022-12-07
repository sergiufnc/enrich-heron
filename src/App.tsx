import React from "react";
import logo from "./logo.svg";
import Example from "./components/Example";

import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <Example />
        <Example />
        <Example />
        <Example />
      </div>
    </div>
  );
}

export default App;
