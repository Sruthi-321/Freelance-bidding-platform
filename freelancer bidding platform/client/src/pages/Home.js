import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Find the perfect freelance services for your business</h1>
          <p className="hero-subtitle">
            Connect with talented freelancers or offer your services on our secure platform.
          </p>
          <div>
            <Link to="/jobs" className="btn btn-primary btn-lg">
              Browse Jobs
            </Link>
            <Link to="/register" className="btn btn-success btn-lg" style={{ marginLeft: '10px' }}>
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '60px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>1</div>
            <h3>Post a Job</h3>
            <p>Create a detailed job posting to attract skilled freelancers.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>2</div>
            <h3>Receive Bids</h3>
            <p>Freelancers will submit proposals with their offers and timelines.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>3</div>
            <h3>Choose a Freelancer</h3>
            <p>Review profiles and portfolios, then select the best fit for your project.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>4</div>
            <h3>Complete the Project</h3>
            <p>Work together securely and release payment upon completion.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;