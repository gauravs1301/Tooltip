import React from "react";
import Tooltip from "./Tooltip";
import "./Tooltip.css"; // Create this CSS file for styling

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: 700, color: "silver" }}>
        Tooltip Project-Coding Ninjas
      </h1>
      <Tooltip position="right">
        <button className="hoverbutton">Hover Me</button>
      </Tooltip>
    </div>
  );
};

export default App;
