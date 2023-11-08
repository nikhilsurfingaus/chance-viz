import React from 'react'
import AboutCover from '../components/AboutUI/AboutCover'
import AboutStats from '../components/AboutUI/AboutStats'
import { AboutFAQ } from '../components/AboutUI/AboutFAQ'
import AboutEmail from '../components/AboutUI/AboutEmail'
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