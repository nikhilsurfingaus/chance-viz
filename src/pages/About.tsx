import React from 'react'
import AboutCover from '../components/AboutCover'
import AboutStats from '../components/AboutStats'
import { AboutFAQ } from '../components/AboutFAQ'
import AboutEmail from '../components/AboutEmail'
import ScrollToTop from "react-scroll-to-top";

const About = () => {
  return (
    <div>
      <ScrollToTop smooth color="#1A64BA " />
      <AboutCover />
      <hr className="glowing-hr" style={{marginTop: '-6px'}} /> 
      <AboutStats />
      <hr className="glowing-hr" style={{marginTop: '-6px'}} /> 
      <AboutFAQ />
      <hr className="glowing-hr" style={{marginTop: '-6px'}} /> 
      <AboutEmail />
    </div>
  )
}

export default About