import '../style/ForecastDisplay.css';
import { useData } from '../DataContext';

export default function ForecastDisplay() {
  const { forecast } = useData();                       // ⬅ берём из контекста

  return (
    <section className="slide forecast">
      <h2 className="forecast__title">Финальный технический лист</h2>

      <ul className="forecast__metrics">
        <li className="forecast__metric">
          <span className="forecast__label">Регион&nbsp;продвижения</span>
          <span className="forecast__value">{forecast.region}</span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">URL&nbsp;сайта</span>
          <span className="forecast__value">{forecast.url}</span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">Прогноз&nbsp;переходов</span>
          <span className="forecast__value">{forecast.clicks}</span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">Прогноз&nbsp;лидов</span>
          <span className="forecast__value">{forecast.leads}</span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">Стоимость</span>
          <span className="forecast__value">{forecast.cost}&nbsp;₽</span>
        </li>
      </ul>

      <div className="forecast__keywords">
        <h3 className="forecast__keywords-title">Ключевые фразы</h3>
        <div className="forecast__keywords-table">
          {(forecast.keywords || []).map((kw) => (
            <div className="kwcell" key={kw}>
              {kw}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
