import React from 'react';
import { DataProvider } from './DataContext.jsx';

import About from './components/About';
import Services from './components/Service';
import Garantii from './components/Garantii.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import ForecastContainer from './components/ForecastContainer';   // ➊

export default function App() {
  return (
    <DataProvider>
      <About />
      <Services />
      <Garantii />
      <HowItWorks />
      <ForecastContainer />                                        {/* ➋ */}
    </DataProvider>
  );
}
