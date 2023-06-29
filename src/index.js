import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Tooltip } from './Tooltip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React>
    <Tooltip text={"tooltip message for you"}>
      <button>Tooltip</button>
    </Tooltip>
  </React>
);


// <button>
// Write, edit and run HTML, CSS and JavaScript code online.
// </button>
// <div class="tooltip-top">  
// <span class="tip tip-up"></span>
// <p >
// Our HTML editor updates the webview automatically in real-time as you write code.
// </p>
// </div>
// <p class="tooltip-right">
// Our HTML editor updates the webview automatically in real-time as you write code.
// </p>
// <p class="tooltip-left">
// Our HTML editor updates the webview automatically in real-time as you write code.
// </p>
// <p class="tooltip-bottom">
// Our HTML editor updates the webview automatically in real-time as you write code.
// </p>