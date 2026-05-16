import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const features = [
  { title: 'Workout Plans', desc: 'Browse beginner to advanced plans tailored to your goals.', link: '/workouts' },
  { title: 'Progress Tracker', desc: 'Log workouts and visualize your fitness journey over time.', link: '/progress' },
  { title: 'Get Support', desc: 'Reach out to our fitness coaches anytime you need help.', link: '/contact' },
];

function Home() {
  const { user } = useAuth();

  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <div className="hero-content">
          <h1>Train Smarter.<br />Live Stronger.</h1>
          <p>Track your workouts, monitor your progress, and crush your fitness goals — all in one place.</p>
          <div className="hero-btns">
            {user ? (
              <Link to="/workouts" className="btn-hero primary">Go to Workouts</Link>
            ) : (
              <>
                <Link to="/register" className="btn-hero primary">Get Started Free</Link>
                <Link to="/login" className="btn-hero outline">Login</Link>
              </>
            )}
          </div>
        </div>

      </div>

      {/* Stats Banner */}
      <div className="stats-banner">
        {[['10K+', 'Active Users'], ['500+', 'Workout Plans'], ['1M+', 'Calories Tracked'], ['98%', 'Satisfaction']].map(([val, label]) => (
          <div key={label} className="banner-stat">
            <span className="banner-val">{val}</span>
            <span className="banner-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <h2 className="section-title">Everything You Need</h2>
      <div className="features-grid">
        {features.map(f => (
          <Link to={f.link} key={f.title} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <span className="feature-link">Explore →</span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      {!user && (
        <div className="cta-section">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of people already transforming their lives with FitTrack.</p>
          <Link to="/register" className="btn-hero primary">Create Free Account</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
