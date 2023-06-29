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
