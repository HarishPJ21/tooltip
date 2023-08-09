import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Tooltip } from './Tooltip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* passing text to be shown in the tooltip as props */}
    <Tooltip text={"tooltip message for you"}>
      <button>Hover</button>
    </Tooltip>
  </React.StrictMode>
);