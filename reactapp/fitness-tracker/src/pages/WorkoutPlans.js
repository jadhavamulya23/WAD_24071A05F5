import React, { useState } from 'react';

const plans = [
  { id: 1, name: 'Full Body Blast', duration: '45 min', days: '3x/week', level: 'beginner', desc: 'Perfect for beginners. Covers all major muscle groups.' },
  { id: 2, name: 'HIIT Cardio', duration: '30 min', days: '4x/week', level: 'intermediate', desc: 'High-intensity intervals to burn fat and boost endurance.' },
  { id: 3, name: 'Strength Builder', duration: '60 min', days: '5x/week', level: 'advanced', desc: 'Heavy compound lifts for serious muscle and strength gains.' },
  { id: 4, name: 'Yoga & Flexibility', duration: '40 min', days: '3x/week', level: 'beginner', desc: 'Improve flexibility, balance, and mental clarity.' },
  { id: 5, name: 'Upper Body Focus', duration: '50 min', days: '4x/week', level: 'intermediate', desc: 'Chest, back, shoulders and arms hypertrophy program.' },
  { id: 6, name: 'Marathon Prep', duration: '75 min', days: '5x/week', level: 'advanced', desc: 'Progressive running plan to prepare for a full marathon.' },
];

function WorkoutPlans() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? plans : plans.filter(p => p.level === filter);

  return (
    <div>
      <h2 className="page-title">Workout Plans</h2>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {['all', 'beginner', 'intermediate', 'advanced'].map(lvl => (
          <button key={lvl} onClick={() => setFilter(lvl)}
            style={{
              padding: '8px 18px', borderRadius: '20px', border: 'none', cursor: 'pointer',
              background: filter === lvl ? '#6b3f6b' : '#fff6f9',
              color: filter === lvl ? '#fff' : '#3d2b3d',
              fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
            {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
          </button>
        ))}
      </div>
      <div className="workout-grid">
        {filtered.map(plan => (
          <div className="workout-card" key={plan.id}>
            <h3>{plan.name}</h3>
            <p>Duration: {plan.duration} &nbsp;|&nbsp; {plan.days}</p>
            <p>{plan.desc}</p>
            <span className={`badge ${plan.level}`}>{plan.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutPlans;
