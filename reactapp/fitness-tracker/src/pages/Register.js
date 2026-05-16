import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', goal: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    login({ name: form.name, email: form.email, goal: form.goal });
    navigate('/dashboard');
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="card">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required value={form.name} onChange={update('name')} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required value={form.email} onChange={update('email')} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Min. 6 characters" required value={form.password} onChange={update('password')} />
        </div>
        <div className="form-group">
          <label>Fitness Goal</label>
          <select value={form.goal} onChange={update('goal')} required>
            <option value="">Select a goal</option>
            <option value="lose_weight">Lose Weight</option>
            <option value="build_muscle">Build Muscle</option>
            <option value="improve_endurance">Improve Endurance</option>
            <option value="stay_active">Stay Active</option>
          </select>
        </div>
        {error && <p style={{ color: '#7c4dbd', fontSize: '0.85rem', marginBottom: '12px' }}>{error}</p>}
        <button className="btn" type="submit">Create Account</button>
      </form>
      <p className="link-text">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
