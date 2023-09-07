import React from 'react';
import './Email.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import { ReactNotifications } from 'react-notifications-component';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { AiFillBell } from 'react-icons/ai';

const AboutEmail = () => {
  const [toSend, setToSend] = useState({
    reply_to: '',
  });

  const submitEmail = () => {
    if (!toSend.reply_to || !isValidEmail(toSend.reply_to)) {
      // Check if the email is null or not properly formatted
      alert('Please enter a valid email address');
      return; // Stop further execution
    }

    send('service_52qktor', 'template_ix3vmct', toSend, 'v1trkY47MkbfEEN5s')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({ reply_to: '' }); // reset the state of toSend
        Store.addNotification({
          title: 'Success',
          message: 'Your message has been sent!',
          type: 'success',
          insert: 'bottom',
          container: 'center',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true,
          },
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send email. Please try again later.');
      });
  };

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div
      style={{
        height: '15vh',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='send'
    >
      <ReactNotifications />
      <div
        className='float'
        style={{
          display: 'flex',
          flexDirection: 'row', // Keep elements in a row
          alignItems: 'center',
        }}
      >
        <div
        className='ally'
          style={{
            backgroundColor: 'black',
            borderRadius: '50%',
            width: '5rem', // Fixed width for a perfect circle
            height: '2.6rem', // Fixed height for a perfect circle
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '0.5rem', // Adjust spacing between the icon and paragraph
          }}
        >
          <AiFillBell
            style={{
              fontSize: '2rem', // Adjust the icon size as needed
              color: 'white',
            }}
          />
        </div>
        <div className='para text-black'>
          {/* Increase margin-right for a bigger horizontal gap */}
          <p style={{ margin: 0, padding: '0.5rem' }}>
            Please feel free to reach out to us using the email below
          </p>
        </div>
        <input
          type='email'
          name='reply_to'
          className='form-control form-control-lg custom-input'
          id='email'
          required
          value={toSend.reply_to}
          onChange={(e) => setToSend({ ...toSend, [e.target.name]: e.target.value })}
          placeholder='Enter your email'
        />
        <button onClick={() => submitEmail()} className='btn buty btn-dark btn-block btn-lg'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AboutEmail;
