import { useState, useEffect } from 'react';
import { useData } from '../DataContext';      // ← хук контекста
import '../style/ForecastForm.css';

export default function ForecastForm() {
  /* читаем глобальные данные и функцию-обновление */
  const { forecast, setForecast } = useData();

  /* локальная копия для редактирования */
  const [local, setLocal] = useState(forecast);

  /* если глобальные данные изменились где-то ещё, синхронизируемся */
  useEffect(() => setLocal(forecast), [forecast]);

  /* обновляем локальное состояние по мере ввода */
  const handle = (field) => (e) => {
    const raw = e.target.value;
    const value = field === 'keywords' ? raw : raw.trim();

    setLocal((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'keywords' && {
        keywords: value.split('\n').filter(Boolean),
      }),
    }));
  };

  /* по клику «Применить» кладём локальные правки в контекст */
  const applyChanges = (e) => {
    e.preventDefault();      // не перезагружаем страницу
    setForecast(local);      // ← сохраняем
  };

  return (
    <form className="forecast-form" onSubmit={applyChanges}>
      <label>
        Регион&nbsp;продвижения
        <input value={local.region ?? ''} onChange={handle('region')} />
      </label>

      <label>
        URL&nbsp;сайта
        <input value={local.url ?? ''} onChange={handle('url')} />
      </label>

      <label>
        Прогноз&nbsp;переходов
        <input value={local.clicks ?? ''} onChange={handle('clicks')} />
      </label>

      <label>
        Прогноз&nbsp;лидов
        <input value={local.leads ?? ''} onChange={handle('leads')} />
      </label>

      <label>
        Стоимость
        <input value={local.cost ?? ''} onChange={handle('cost')} />
      </label>

      <label>
        Ключевые&nbsp;фразы (каждая с новой строки)
        <textarea
          rows={6}
          value={(local.keywords || []).join('\n')}
          onChange={handle('keywords')}
        />
      </label>

      <button type="submit" className="forecast-form__apply">
        Применить
      </button>
    </form>
  );
}
