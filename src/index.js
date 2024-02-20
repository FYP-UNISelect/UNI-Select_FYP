import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists or remove the import if not using
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals'; // Optional, remove if not using

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional, remove if not using reportWebVitals
reportWebVitals();
