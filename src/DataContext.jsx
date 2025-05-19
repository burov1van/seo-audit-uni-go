import React, { createContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [forecast, setForecast] = useState({});
  return <DataContext.Provider value={{ forecast, setForecast }}>{children}</DataContext.Provider>;
}

export function useData() {
  return React.useContext(DataContext);
}
