import React from "react";
import "./App.css";
import { IconContext } from "@accessitech/react-icons";
import { FaBeer } from "@accessitech/react-icons/fa";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <IconContext.Provider value={{ color: "#fa7" }}>
          <FaBeer />
        </IconContext.Provider>
      </header>
    </div>
  );
};

export default App;
