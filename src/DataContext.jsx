import React, { createContext, useContext, useState } from 'react';

export const DataContext = createContext();

/** дефолтное наполнение «тех-листа» */
const defaultForecast = {
  region: 'Калининград',
  url: 'https://pamyat-39.ru/',
  clicks: '21 000',
  leads:  '210',
  cost:   '50 000',
  keywords: [
    'вазы и балясины',
    'купить колумбарий',
    'замеры захоронений',
    // …
  ],
};

export function DataProvider({ children }) {
  const [forecast, setForecast] = useState(defaultForecast);

  return (
    <DataContext.Provider value={{ forecast, setForecast }}>
      {children}
    </DataContext.Provider>
  );
}

/** удобный хук: const { forecast, setForecast } = useData(); */
export function useData() {
  return useContext(DataContext);
}
