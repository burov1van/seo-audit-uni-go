// src/components/KPManager.jsx
import { useKPStore } from '../kpStore';
import { selectCurrent } from '../kpStore';

export default function KPManager() {
  const { kps, currentId, addKP, loadKP, deleteKP } = useKPStore();
  const hasItems = kps.length > 0;

  /* выбранный id: либо currentId, либо id первого КП, либо '' */
  const selectedId = currentId ?? kps[0]?.id ?? '';

  return (
    <div className="kp-manager">
      <select value={selectedId} onChange={(e) => loadKP(e.target.value)} disabled={!hasItems}>
        {kps.map((kp) => (
          <option key={kp.id} value={kp.id}>
            {kp.title}
          </option>
        ))}
      </select>

      {/* копируем текущий лист и создаём новый */}
      <button onClick={() => addKP(selectCurrent(useKPStore.getState()).forecast)}>
        Добавить КП
      </button>

      {/* нельзя удалить, если осталось единственное КП */}
      <button onClick={() => deleteKP(selectedId)} disabled={!hasItems || kps.length === 1}>
        Удалить
      </button>
    </div>
  );
}
