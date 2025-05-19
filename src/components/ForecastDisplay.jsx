import '../style/ForecastDisplay.css';

export default function ForecastDisplay() {
  const keywords = [
    'вазы и балясины',
    'купить колумбарий',
    'замеры захоронений',
    'монтаж памятников',
    'установка памятников',
    'кресты на могилу',
    'установка колумбариев',
    'ритуальное агентство',
    'ритуальные услуги',
    'лавки для кладбища',
    'гранитные памятники',
    'благоустройство могил',
    'гранитные ограды',
    'заказать памятник',
    'памятники цена',
    'благоустройство захоронений',
    'урны для праха',
    'купить памятник',
    'надгробные памятники',
    'изготовление памятников',
    'ритуальные товары',
    'металлические колумбарии',
    'надгробные плиты',
    'памятники из гранита',
    'памятники калининград',
    'плиты из гранита',
    'ритуальное агентство',
    'ритуальные услуги',
    'лавки для кладбища',
    'гранитные памятники',
    'благоустройство могил',
    'гранитные ограды',
    'заказать памятник',
    'памятники цена',
    'благоустройство захоронений',
    'урны для праха',
    'купить памятник',
    'надгробные памятники',
    'изготовление памятников',
    'ритуальные товары',
    'металлические колумбарии',
    'надгробные плиты',
    'памятники из гранита',
    'памятники калининград',
    'плиты из гранита',
  ];

  return (
    <section className="slide forecast">
      <h2 className="forecast__title">Финальный технический лист</h2>

      {/* блок метрик: подпись + значение */}
      <ul className="forecast__metrics">
        <li className="forecast__metric">
          <span className="forecast__label">Регион&nbsp;продвижения</span>
          <span className="forecast__value" data-field="region">
            Калининград
          </span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">URL&nbsp;сайта</span>
          <span className="forecast__value" data-field="url">
            https://pamyat-39.ru/
          </span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">Прогноз&nbsp;переходов</span>
          <span className="forecast__value" data-field="clicks">
            21&nbsp;000
          </span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">Прогноз&nbsp;лидов</span>
          <span className="forecast__value" data-field="leads">
            210
          </span>
        </li>
        <li className="forecast__metric">
          <span className="forecast__label">Стоимость</span>
          <span className="forecast__value" data-field="cost">
            50&nbsp;000&nbsp;₽
          </span>
        </li>
      </ul>

      {/* таблица ключевых слов */}
      <div className="forecast__keywords">
        <h3 className="forecast__keywords-title">Ключевые фразы</h3>

        <div className="forecast__keywords-table" data-field="keywords">
          {keywords.map((kw) => (
            <div className="kwcell" key={kw}>
              {kw}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
