import React, { useState } from "react";

export const Tooltip = ({text,children}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
        {children}
        {console.log(isVisible)}
      {isVisible && <div className="tooltip-box"> {text} </div>}  
    </div>
  );
};
