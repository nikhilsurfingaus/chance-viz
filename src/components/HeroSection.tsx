import Typewriter from 'typewriter-effect';
import nisson from '../assets/videos/bg.mp4';
import './Hero.css';
import { Link as ScrollLink } from 'react-scroll';
import {AiFillCaretDown} from 'react-icons/ai'

const HeroSection = () => {

  return (
    <div className='cov text-white m-0 p-0 relative main z-0  animate__animated animate__fadeIn' id='home'>
      <div className='overlay h-screen'></div>
      <video src={nisson} autoPlay playsInline loop muted className='video' />
      <div className='content max-w-[800px] mt-[-70px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className=' lander animate__animated animate__fadeIn md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 head'>WHATS MY CHANCE ?</h1>
        <div className='flex justify-center items-center'>
          <h3 style={{ fontSize: '3rem', color: 'white' }} className='start'>
            <Typewriter
              options={{
                strings: ['Understand Chance', 'Learn Odds Visually', 'Probability With Scale'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h3>
        </div>
        <ScrollLink to='animateSection' spy={true} smooth={true} offset={-5} duration={300}>
              <button className='begin btn btn-primary mt-4'><span>LEARN MORE <AiFillCaretDown className='mb-1'  /></span></button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroSection;