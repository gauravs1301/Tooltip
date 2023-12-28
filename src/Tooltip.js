import React from "react";
import "./Tooltip.css"; // Create this CSS file for styling

const Tooltip = ({ children, position }) => {
  const tooltipClass = `tooltip ${position}`;

  return (
    <div className="tooltip-container">
      <div className={tooltipClass}>I am {position} tooltip</div>
      {children}
    </div>
  );
};

export default Tooltip;
