import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

import Home from './pages/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);