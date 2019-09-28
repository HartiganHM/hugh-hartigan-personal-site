import React, { createContext, useContext, useReducer } from 'react';
import { object, node, oneOfType, arrayOf } from 'prop-types';

export const StateContext = createContext();

export const useStateValue = () => useContext(StateContext);

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  reducer: object,
  initialState: object,
  children: oneOfType(node, arrayOf(node))
};
