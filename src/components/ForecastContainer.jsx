import { useState } from 'react';
import ForecastForm from './ForecastForm';
import ForecastDisplay from './ForecastDisplay';

export default function ForecastContainer() {
  const [data, setData] = useState({
    region: 'Калининград',
    url: 'https://pamyat-39.ru/',
    clicks: '21 000',
    leads: '210',
    cost: '50 000',
    keywords: [
      'вазы и балясины',
      'купить колумбарий',
      'замеры захоронений',
      // …
    ],
  });

  return (
    <>
      <ForecastDisplay data={data} />
      <ForecastForm data={data} onChange={setData} />
    </>
  );
}
