import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

const jsx = (
  <AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));
