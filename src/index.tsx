import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './index.css';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
