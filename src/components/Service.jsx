import '../style/Service.css';
export default function Service() {
  return (
    <section className="slide service">
      {/* левая часть ─ выгоды для клиента */}
      <div className="service__column service__column--benefits">
        <h2 className="service__heading service__heading--benefits">
          Что клиент получит от услуги «SEO TOP 10»
        </h2>

        <ul className="service__list service__list--benefits">
          <li className="service__item service__item--benefit">
            Продвижение приоритетных коммерческих запросов в&nbsp;ТОП-1-3 выдачи&nbsp;Яндекс
          </li>
          <li className="service__item service__item--benefit">
            Получение первых заявок и&nbsp;продаж в&nbsp;течение&nbsp;27&nbsp;дней после запуска
          </li>
          <li className="service__item service__item--benefit">
            Привлечение дополнительного трафика за&nbsp;счёт сопутствующих фраз без доплат
          </li>
          <li className="service__item service__item--benefit">
            Снижение затрат на&nbsp;рекламу за&nbsp;счёт стабильного органического трафика
          </li>
          <li className="service__item service__item--benefit">
            Повышение конверсии и&nbsp;среднего чека за&nbsp;счёт доверия к&nbsp;сайту в&nbsp;поиске
          </li>
          <li className="service__item service__item--benefit">
            Еженедельные отчёты с&nbsp;данными по&nbsp;трафику, заявкам и&nbsp;выручке
          </li>
          <li className="service__item service__item--benefit">
            Чёткий фиксированный бюджет без скрытых расходов
          </li>
        </ul>
      </div>

      {/* правая часть ─ что требуется от клиента */}
      <div className="service__column service__column--requirements">
        <h2 className="service__heading service__heading--requirements">
          Что требуется от клиента ‒ исходные данные и условия
        </h2>

        <ul className="service__list service__list--requirements">
          <li className="service__item service__item--requirement">
            Рабочий домен (ссылка на сайт) без фильтров и блокировок.
          </li>
          <li className="service__item service__item--requirement">
            Перечень товаров или услуг, которые вы хотите продвигать поисковой выдаче.
          </li>
          <li className="service__item service__item--requirement">
            Тематика не «тёмная»: не продвигаем быстрые кредиты, серые схемы, запрещённый контент.
          </li>
          <li className="service__item service__item--requirement">
            https, мобильная адаптивность, уникальные тексты, отсутствие критических SEO-ошибок
          </li>
          <li className="service__item service__item--requirement">
            Доступ к Метрике и Вебмастеру для подключения отчётов и фиксации позиций.
          </li>
        </ul>
      </div>
    </section>
  );
}
