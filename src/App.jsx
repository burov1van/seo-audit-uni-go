import React from 'react';

import About from './components/About';
import Services from './components/Service';
import Garantii from './components/Garantii.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import KPManager from './components/KPManager.jsx';
import ForecastDisplay from './components/ForecastDisplay.jsx';
import ForecastForm from './components/ForecastForm.jsx';

export default function App() {
  return (
    <>
      <About />
      <Services />
      <Garantii />
      <HowItWorks />
      <ForecastDisplay />
      <ForecastForm />
      <KPManager />
    </>
  );
}
