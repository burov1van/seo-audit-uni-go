import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forecastSchema } from '../forecastSchema'; // ← только schema
import { useKPStore, selectForecast } from '../kpStore';
import '../style/ForecastForm.css';

export default function ForecastForm() {
  /* данные из стора */
  const forecast = useKPStore(selectForecast);
  const saveForecast = useKPStore((s) => s.saveCurrentForecast);

  /* react-hook-form + zod */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(forecastSchema),
    defaultValues: {
      ...forecast,
      keywords: (forecast.keywords || []).join('\n'),
    },
  });

  /* если пользователь переключил КП → сбрасываем форму */
  useEffect(() => {
    reset({
      ...forecast,
      keywords: (forecast.keywords || []).join('\n'),
    });
  }, [forecast, reset]);

  /* отправка */
  const onSubmit = (data) => {
    saveForecast({
      ...data,
      keywords: data.keywords.split('\n').filter(Boolean),
    });
  };

  return (
    <form className="forecast-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Регион&nbsp;продвижения
        <input {...register('region')} />
        {errors.region && <span className="err">{errors.region.message}</span>}
      </label>

      <label>
        URL&nbsp;сайта
        <input {...register('url')} />
        {errors.url && <span className="err">{errors.url.message}</span>}
      </label>

      <label>
        Прогноз&nbsp;переходов
        <input {...register('clicks')} />
        {errors.clicks && <span className="err">{errors.clicks.message}</span>}
      </label>

      <label>
        Прогноз&nbsp;лидов
        <input {...register('leads')} />
        {errors.leads && <span className="err">{errors.leads.message}</span>}
      </label>

      <label>
        Стоимость&nbsp;(₽)
        <input {...register('cost')} />
        {errors.cost && <span className="err">{errors.cost.message}</span>}
      </label>

      <label>
        Ключевые&nbsp;фразы (каждая с новой строки)
        <textarea rows={6} {...register('keywords')} />
        {errors.keywords && <span className="err">{errors.keywords.message}</span>}
      </label>

      <button type="submit" className="forecast-form__apply" disabled={!isDirty}>
        Применить
      </button>
    </form>
  );
}
