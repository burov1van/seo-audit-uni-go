import '../style/HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="slide howitworks">
      <h2 className="howitworks__title">Порядок работы</h2>

      <ul className="howitworks__list">
        <li className="howitworks__item">
          <h3 className="howitworks__item-title">Получение исходных</h3> данных • Клиент передаёт
          домен, целевой регион и перечень услуг / товаров для продвижения.
        </li>
        <li className="howitworks__item">
          <h3 className="howitworks__item-title">Работа с семантикой</h3>Подбираем список ключевых
          слов для семантического ядра на основании переданных услуг / товаров.
        </li>
        <li className="howitworks__item">
          <h3 className="howitworks__item-title">Снятие позиций и проверка запросов</h3>Фиксируем
          текущие позиции именно в указанном регионе. Запросы должны быть в диапазоне TOP-50.
        </li>
        <li className="howitworks__item">
          <h3 className="howitworks__item-title"> Уточнение списка ключевых слов</h3>Если часть фраз
          вне диапазона, подбираем альтернативы из TOP-50 и отправляем на согласование.
        </li>
        <li className="howitworks__item">
          <h3 className="howitworks__item-title">Прогноз и согласование</h3>Рассчитываем сроки
          вывода и фиксированную стоимость. Закрепляем в договоре.
        </li>
        <li className="howitworks__item">
          <h3 className="howitworks__item-title">Запуск продвижения</h3>После подписания договора и
          оплаты запускаем работу по утверждённому списку фраз.
        </li>
        <li className="howitworks__item">
          <h3 className="howitworks__item-title">Мониторинг и отчётность</h3>Еженедельно отслеживаем
          динамику позиций, предоставляем интеграктивные отчёты.
        </li>
        {/* восьмую ячейку можно оставить пустой или добавить «Итого» */}
      </ul>
    </section>
  );
}
