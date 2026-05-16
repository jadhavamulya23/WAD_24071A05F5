import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    login({ email: form.email, name: form.email.split('@')[0] });
    navigate('/dashboard');
  };

  return (
    <div className="card">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" required
            value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
        </div>
        {error && <p style={{ color: '#7c4dbd', fontSize: '0.85rem', marginBottom: '12px' }}>{error}</p>}
        <button className="btn" type="submit">Login</button>
      </form>
      <p className="link-text">Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;
