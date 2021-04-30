import React, { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../utils';

const ApplicationContext = createContext();

export const AppContext = ApplicationContext.Consumer;
export const useAppContext = () => useContext(ApplicationContext);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = {
    state,
    dispatch,
  };

  return <ApplicationContext.Provider value={contextValue}>{children}</ApplicationContext.Provider>;
};
