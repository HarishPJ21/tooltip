import React, { useState } from "react";

export const Tooltip = ({text,children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [direction,setDirection] = useState("left"); 
  return (
    <>
    <div className="dropDown">
      {/* based on the option selected the direction will be set using hooks */}
      <select value={direction} onChange={e=>setDirection(e.target.value)}>
      <option>left</option>
      <option>right</option>
      <option>top</option>
      <option>bottom</option>
      </select>
    </div>
    <div
      className="tooltip"
      //based on the hover the isVisible will be set to true using the hook
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
        {children}
        {/* {console.log(isVisible)} */}
        {/*1. only when is visible is true the below div will be shown 
           2. class name inside the tool tip will change dynamically with respect to the option selected in direction */}
      {isVisible && <div className={`tooltip-${direction}`}><span className={`tip tip-${direction}`}></span> {text} </div>}  
    </div>
    </>
  );
};
