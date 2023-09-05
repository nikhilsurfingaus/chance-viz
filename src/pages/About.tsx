import React from 'react'
import AboutCover from '../components/AboutCover'
import AboutStats from '../components/AboutStats'

const About = () => {
  return (
    <div>
      <AboutCover />
      <hr className="glowing-hr" style={{marginTop: '-6px'}} /> 
      <AboutStats />
      <hr className="glowing-hr" style={{marginTop: '-6px'}} /> 
    </div>
  )
}

export default About