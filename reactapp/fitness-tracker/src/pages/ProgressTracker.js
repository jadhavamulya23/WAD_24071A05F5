import React, { useState } from 'react';

const initialProgress = [
  { label: 'Workouts Completed', value: 18, max: 30 },
  { label: 'Calories Burned', value: 7200, max: 12000 },
  { label: 'Weekly Goal', value: 4, max: 5 },
  { label: 'Strength Goal', value: 65, max: 100 },
];

function ProgressTracker() {
  const [log, setLog] = useState({ workout: '', duration: '', calories: '' });
  const [entries, setEntries] = useState([
    { workout: 'Full Body Blast', duration: '45', calories: '380', date: '2024-06-01' },
    { workout: 'HIIT Cardio', duration: '30', calories: '310', date: '2024-06-03' },
  ]);

  const handleLog = (e) => {
    e.preventDefault();
    setEntries([{ ...log, date: new Date().toISOString().split('T')[0] }, ...entries]);
    setLog({ workout: '', duration: '', calories: '' });
  };

  return (
    <div>
      <h2 className="page-title">Progress Tracker</h2>

      <div className="stats-grid">
        {[
          { value: entries.length, label: 'Total Workouts' },
          { value: entries.reduce((s, e) => s + Number(e.calories), 0), label: 'Calories Burned' },
          { value: entries.reduce((s, e) => s + Number(e.duration), 0) + ' min', label: 'Total Time' },
          { value: '7.2 kg', label: 'Weight Lost' },
        ].map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="progress-section">
        <h3>Goal Progress</h3>
        {initialProgress.map((item, i) => (
          <div className="progress-item" key={i}>
            <label>
              <span>{item.label}</span>
              <span>{item.value} / {item.max}</span>
            </label>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${(item.value / item.max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="progress-section">
        <h3>Log a Workout</h3>
        <form onSubmit={handleLog} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '12px', alignItems: 'end' }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Workout</label>
            <input type="text" placeholder="e.g. Running" required value={log.workout}
              onChange={e => setLog({ ...log, workout: e.target.value })} />
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Duration (min)</label>
            <input type="number" placeholder="30" required value={log.duration}
              onChange={e => setLog({ ...log, duration: e.target.value })} />
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label>Calories</label>
            <input type="number" placeholder="250" required value={log.calories}
              onChange={e => setLog({ ...log, calories: e.target.value })} />
          </div>
          <button className="btn" type="submit" style={{ width: 'auto', padding: '10px 20px' }}>Log</button>
        </form>

        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: '#f8f8f8' }}>
              {['Date', 'Workout', 'Duration', 'Calories'].map(h => (
                <th key={h} style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #eee' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '10px' }}>{e.date}</td>
                <td style={{ padding: '10px' }}>{e.workout}</td>
                <td style={{ padding: '10px' }}>{e.duration} min</td>
                <td style={{ padding: '10px' }}>{e.calories} kcal</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProgressTracker;
