import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App, StateProvider } from './components';
import './index.css';

const initialState = {
  currentPage: 'home',
  isMenuShown: false
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_CURRENT_PAGE': {
    return {
      ...state,
      currentPage: action.currentPage
    };
  }
  case 'TOGGLE_MENU': {
    return {
      ...state,
      isMenuShown: action.isMenuShown
    };
  }
  default:
    return state;
  }
};

const router = (
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
