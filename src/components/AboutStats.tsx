import React from 'react';
import './Stats.css';
import people from '../animation/stat1.json';
import Lottie from 'lottie-react';

const AboutStats = () => {
  return (
    <div className="stats-container" style={{ height: '60vh', background: 'white' }}>
      <h2 className="section-title mt-5 text-center inspire-head">By The Numbers...</h2>
      <div className="container contain" style={{marginTop: '75px'}}>
        <div className="row">
          <div className="col-md-6">
            <div className="stats">
              <div className="row">
                <div className="col-6 stat-item">
                  <h3 className="stat-text">Struggle to Understand Probability</h3>
                  <p className="stat-number">60% Of People</p>
                </div>
                <div className="col-6 stat-item">
                  <h3 className="stat-text">Misjudging Daily Life Probabilities</h3>
                  <p className="stat-number">3 Times Daily</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6 stat-item">
                  <h3 className="stat-text">Losses in Low-Chance Lotteries</h3>
                  <p className="stat-number">$2.5 Billion</p>
                </div>
                <div className="col-6 stat-item">
                  <h3 className="stat-text">Users Benefiting from Visualized Odds</h3>
                  <p className="stat-number">5+ Million</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <Lottie animationData={people} style={{ height: '60%' }}  className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
