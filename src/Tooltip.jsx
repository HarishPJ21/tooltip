import React, { useState } from "react";

export const Tooltip = ({text,children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [direction,setDirection] = useState(); 
  return (
    <>
    <div className="dropDown">
      <select value={direction} onChange={e=>setDirection(e.target.value)}>
      <option>left</option>
      <option>right</option>
      <option>top</option>
      <option>bottom</option>
      </select>
    </div>
    <div
      className="tooltip"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
        {children}
        {console.log(isVisible)}
      {isVisible && <div className={`tooltip-${direction}`}><span className={`tip tip-${direction}`}></span> {text} </div>}  
    </div>
    </>
  );
};
