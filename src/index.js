import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Tooltip } from './Tooltip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tooltip text={"tooltip message for you"}>
      <button>Hover</button>
    </Tooltip>
  </React.StrictMode>
);