import React from 'react';
import './Email.css';

const AboutEmail = () => {
  return (
    <div style={{ height: '50vh', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='send'>
      <div className='float' style={{ background: '#0b5ed7', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div className='para'>
          <p style={{ margin: 0, padding: '0.5rem' }}>Please feel free to reach out to us using the email below</p>
        </div>
        <div style={{ flex: '1', height: '100%' }}> {/* Set the height of this div to 100% */}
          <input
            type="email"
            className="form-control form-control-lg custom-input" // Added 'form-control-lg' class
            id="email"
            placeholder="Enter your email"
            style={{ height: '100%' }} // Set the input's height to 100%
          />
        </div>
        <div>
          <button className="btn buty btn-dark btn-block btn-lg">Submit</button> {/* Added 'btn-lg' class */}
        </div>
      </div>
    </div>
  );
};

export default AboutEmail;
