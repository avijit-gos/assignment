/** @format */
import React from "react";
import { createContext, useContext } from "react";

const StateContext = createContext();

function StateContextProvider({ children }) {
  const [pageType, setPageType] = React.useState("");
  const [cart, setCart] = React.useState([]);
  return (
    <StateContext.Provider value={{ pageType, setPageType, cart, setCart }}>
      {children}
    </StateContext.Provider>
  );
}

export const GlobalContext = () => {
  return useContext(StateContext);
};

export default StateContextProvider;
