import { z } from 'zod';

/* допускаем цифры и пробелы: «21 000», «3 500 000» */
const digits = z
  .string()
  .trim()
  .regex(/^[\d\s]+$/, 'Только цифры и пробелы')
  .refine((s) => /\d/.test(s), 'Поле не должно быть пустым'); // хотя бы одна цифра

const url = z.string().url('Некорректный URL').max(200);

const city = z
  .string()
  .trim()
  .regex(/^[А-ЯЁа-яёA-Za-z\s\-]{2,60}$/, 'Только буквы, пробелы и дефис')
  .refine((s) => s.split(/\s+/).length <= 3, 'Максимум 3 слова');

export const forecastSchema = z.object({
  region: city,
  url,
  clicks: digits,
  leads: digits,
  cost: digits,
  keywords: z.string().min(3, 'Введите хотя бы одно слово'),
});

export type ForecastFormShape = z.infer<typeof forecastSchema>;
