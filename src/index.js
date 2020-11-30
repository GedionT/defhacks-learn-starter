import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import App from './App';
import ContextWrapper from './context/ContextWrapper';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <Router>
        <App />
      </Router>
    </ContextWrapper>
  </React.StrictMode>,
  rootElement
);
