import React from 'react';
import './Email.css';
import {useState} from 'react'
import { send } from 'emailjs-com';
import {ReactNotifications} from 'react-notifications-component';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const AboutEmail = () => {

  // const [email, setEmail] = useState('')

  const [toSend, setToSend] = useState({
    reply_to: ''
  });

  const submitEmail = () => {
    send(
      'service_52qktor',
      'template_ix3vmct',
      toSend,
      'v1trkY47MkbfEEN5s'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({ reply_to: '' }); // reset the state of toSend
        Store.addNotification({
          title: 'Success',
          message: 'Your message has been sent!',
          type: 'success',
          insert: 'top',
          container: 'center',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      //clear text filed
      setToSend({reply_to: ''})
  }


  return (
    <div style={{ height: '50vh', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='send'>
      <ReactNotifications />
      <div className='float' style={{ background: '#0b5ed7', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div className='para'>
          <p style={{ margin: 0, padding: '0.5rem' }}>Please feel free to reach out to us using the email below</p>
        </div>
        <div style={{ flex: '1', height: '100%' }}> {/* Set the height of this div to 100% */}
          <input
            type="email"
            name="reply_to" // Add the name attribute
            className="form-control form-control-lg custom-input" // Added 'form-control-lg' class
            id="email"
            required
            value={toSend.reply_to}
            onChange={(e) => setToSend({...toSend, [e.target.name]: [e.target.value]})}
            placeholder="Enter your email"
            style={{ height: '100%' }} // Set the input's height to 100%
          />
        </div>
        <div>
          <button onClick={() => submitEmail()}  className="btn buty btn-dark btn-block btn-lg">Submit</button> 
        </div>
      </div>
    </div>
  );
};

export default AboutEmail;
