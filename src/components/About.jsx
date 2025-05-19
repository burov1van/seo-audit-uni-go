import '../style/About.css';
import '../style/variables.css';

export default function About() {
  return (
    <section className="slide about">
      {/* Заголовок презентации */}
      <div className="about__header">
        <h1 className="about__title">Коммерческое предложение</h1>
        <p className="about__subtitle">
          Услуга «SEO TOP 10» для сайта <strong>https://pamyat-39.ru/</strong>
        </p>
      </div>

      {/* Блок «О компании» */}
      <div className="about__company">
        <h2 className="about__heading">Кто такие «ЛИДОВ.РФ»?</h2>
        <p className="about__text">
          С 2013 года мы помогаем предпринимателям повышать продажи через интернет. Работаем со
          всеми ключевыми digital-каналами: настраиваем контекстную, таргетированную и
          программатик-рекламу, внедряем CRM и сквозную аналитику, создаём сайты и лендинги «под
          ключ» — и выводим их в ТОП поисковой выдачи.
        </p>
      </div>

      {/* Почему вам стоит работать с нами */}
      <div className="about__why-work">
        <ul className="about__stats-list">
          <li className="about__stat-item">
            <strong>487 000+</strong> звонков, заявок и заказов получили клиенты в 2024 году.
          </li>
          <li className="about__stat-item">
            <strong>783 компании</strong> сотрудничали с нами за тот же период.
          </li>
          <li className="about__stat-item">
            <strong>450+ сайтов</strong> различной тематики мы создали в 2024 году.
          </li>
        </ul>
      </div>

      {/* Наши преимущества */}
      <div className="about__features">
        <h2 className="about__heading">Наши преимущества</h2>
        <ul className="about__features-list">
          <li className="about__feature-item">
            <strong>Скорость вывода в ТОП:</strong> гарантированно выводим ваш сайт в ТОП-10 Яндекса
            за 27 дней с момента старта (часто — ещё быстрее).
          </li>
          <li className="about__feature-item">
            <strong>Гибкая ценовая политика:</strong> выберите комплексное продвижение или точечную
            работу по ключевым запросам.
          </li>
          <li className="about__feature-item">
            <strong>Оплата за результат:</strong> платите только за подтверждённые лиды — без
            абонентской платы и рекламных бюджетов.
          </li>
          <li className="about__feature-item">
            <strong>Сертифицированная экспертиза:</strong> партнёр Яндекса (7 лет) и Google,
            сертифицированное агентство Alytics; владеем зарегистрированной торговой маркой
            «ЛИДОВ.РФ».
          </li>
          <li className="about__feature-item">
            <strong>Сильная команда:</strong> проекты ведут профильные SEO-специалисты, маркетологи
            и аналитики. 92 % продвигаемых запросов сохраняют позиции в TOP-10 дольше года.
          </li>
          <li className="about__feature-item">
            <strong>Технологичный подход:</strong> используем ИИ-инструменты и собственные
            алгоритмы, чтобы за часы анализировать нишу, конкурентов и сразу предлагать работающие
            гипотезы.{' '}
          </li>
        </ul>
      </div>
    </section>
  );
}
