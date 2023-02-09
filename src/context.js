

import React, { useContext, useState } from "react";


import Fetch from "./Fetch";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  console.log(query,"query")
  const { isLoading, isError, movie, searchmovie} = Fetch(`${query}`);

  return (
    <AppContext.Provider value={{ query, movie,searchmovie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };