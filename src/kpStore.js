import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { format } from 'date-fns';

/* ---------- дефолтный тех-лист ---------- */
const defaultForecast = {
  region: 'Калининград',
  url: 'https://pamyat-39.ru/',
  clicks: '21 000',
  leads: '210',
  cost: '50 000',
  keywords: ['вазы и балясины', 'купить колумбарий', 'замеры захоронений'],
};

/* ---------- генерация названия КП ---------- */
const buildTitle = (forecast) => {
  const stamp = format(new Date(), 'dd.MM.yy HH:mm'); // 27.05.25 14:30
  return `${stamp} | ${forecast.url} | ${forecast.cost}`;
};

/* ---------- zustand-store ---------- */
export const useKPStore = create(
  persist(
    (set) => ({
      /* данные */
      kps: [
        {
          id: crypto.randomUUID(),
          title: buildTitle(defaultForecast),
          created: Date.now(),
          forecast: defaultForecast,
        },
      ],
      currentId: null,

      /* действия */
      addKP: (incomingForecast = defaultForecast) => {
        const id = crypto.randomUUID();
        set((s) => ({
          kps: [
            ...s.kps,
            {
              id,
              title: buildTitle(incomingForecast),
              created: Date.now(),
              forecast: incomingForecast,
            },
          ],
          currentId: id,
        }));
      },

      loadKP: (id) => set({ currentId: id }),

      deleteKP: (id) =>
        set((s) => {
          /* удаляем выбранную карточку */
          let next = s.kps.filter((k) => k.id !== id);

          /* если всё стёрли — создаём «fallback»-КП */
          if (next.length === 0) {
            const fallback = {
              id: crypto.randomUUID(),
              title: buildTitle(defaultForecast),
              created: Date.now(),
              forecast: defaultForecast,
            };
            next = [fallback];
          }

          return {
            kps: next,
            currentId: next[0].id, // всегда есть хотя бы один элемент
          };
        }),

      saveCurrentForecast: (forecast) =>
        set((s) => ({
          kps: s.kps.map((k) =>
            k.id === s.currentId ? { ...k, forecast, title: buildTitle(forecast) } : k,
          ),
        })),
    }),
    {
      name: 'kp-store',
      /* persist сохраняет только данные, без функций */
      partialize: (state) => ({ kps: state.kps, currentId: state.currentId }),
    },
  ),
);

/* ---------- селекторы ---------- */
export const selectCurrent = (s) =>
  s.kps.find((k) => k.id === (s.currentId ?? s.kps[0]?.id)) ?? {
    id: null,
    title: 'Черновик',
    forecast: defaultForecast,
  };

export const selectForecast = (s) => selectCurrent(s).forecast;
