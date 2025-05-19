import React from 'react';
import { DataProvider } from './DataContext.jsx';

import About from './components/About';
import Services from './components/Service';
import ForecastDisplay from './components/ForecastDisplay';
import ForcastEdit from './components/ForecastEdit';
import Garantii from './components/Garantii.jsx';
import HowItWorks from './components/HowItWorks.jsx';

export default function App() {
  return (
    <DataProvider>
      <About />
      <Services />
      <Garantii />
      <HowItWorks />
      <ForecastDisplay />
    </DataProvider>
  );
}
