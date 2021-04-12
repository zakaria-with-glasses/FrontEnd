import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import { Root } from './GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Root/>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
