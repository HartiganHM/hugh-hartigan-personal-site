import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Components/Routes/Routes';
import './index.css';

const router = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
