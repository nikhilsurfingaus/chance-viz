import React from 'react'
import './FAQ.css'
import Accordion from 'react-bootstrap/Accordion';

const accordionData = [
  {
    title: 'What is Chance Viz',
    content: 'Chance Viz is a platform that uses visualizations to help users understand the concept of probability and improbability.',
  },
  {
    title: 'How does Chance Viz work',
    content: 'We translate complex odds into relatable visuals, making it easier for you to grasp the likelihood of different events.',
  },
  {
    title: 'How can I benefit from Chance Viz',
    content: 'Chance Viz helps you make informed decisions, avoid unrealistic expectations, and gain a deeper understanding of unlikely events.',
  },
  {
    title: 'Are the visualizations accurate',
    content: 'We strive for accuracy in our visualizations, but they are for educational purposes and may not represent specific real-world odds.',
  },
  {
    title: 'How does Chance Viz ensure the privacy and security of user data',
    content: 'At Chance Viz, we take privacy and security seriously. We use industry-standard encryption and follow strict data protection protocols to safeguard your personal information and usage data.',
  }
];

export const AboutFAQ = () => {
  return (
    <div className='cont' style={{ height: '80vh', background: '#0b5ed7', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="section-title pb-5 text-center text-white inspire-head">Chance Viz FAQ</h2>
      <div className="accord" style={{ width: '50%' }}>
        <Accordion>
          {accordionData.map((item, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header className='ct'>{item.title}</Accordion.Header>
              <Accordion.Body className='an'>{item.content}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
