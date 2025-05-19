import { useState, useEffect } from 'react';
import '../style/ForecastForm.css';   // ← добавляем стили

export default function ForecastForm({ data, onChange }) {
  const [local, setLocal] = useState(data);
  useEffect(() => setLocal(data), [data]);

  const handle = (field) => (e) => {
    const value =
      field === 'keywords' ? e.target.value : e.target.value.trim();

    const next = {
      ...local,
      [field]: value,
      ...(field === 'keywords' && {
        keywords: value.split('\n').filter(Boolean),
      }),
    };

    setLocal(next);
    onChange(next);
  };

  return (
    <form className="forecast-form">
      <label>
        Регион&nbsp;продвижения
        <input value={local.region} onChange={handle('region')} />
      </label>

      <label>
        URL&nbsp;сайта
        <input value={local.url} onChange={handle('url')} />
      </label>

      <label>
        Прогноз&nbsp;переходов
        <input value={local.clicks} onChange={handle('clicks')} />
      </label>

      <label>
        Прогноз&nbsp;лидов
        <input value={local.leads} onChange={handle('leads')} />
      </label>

      <label>
        Стоимость
        <input value={local.cost} onChange={handle('cost')} />
      </label>

      <label>
        Ключевые&nbsp;фразы (каждая с новой строки)
        <textarea
          rows={6}
          value={(local.keywords || []).join('\n')}      
              onChange={handle('keywords')}
        />
      </label>
    </form>
  );
}
