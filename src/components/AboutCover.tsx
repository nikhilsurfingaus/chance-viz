import nisson from '../assets/videos/about.mp4';
import './AboutCover.css';

const AboutCover = () => {
  return (
    <div className='cova text-white m-0 p-0 relative maina z-0 animate__animated animate__fadeIn' id='home'>
      <div className='overlaya h-screen'></div>
      <video src={nisson} playsInline autoPlay loop muted className='Avideo' />
      <div className='contenta max-w-[800px] mt-[-70px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='lander animate__animated animate__fadeIn md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 heada'>
          <span style={{ color: '#0b5ed7' }}>ABOUT</span> <span style={{ color: 'white' }}>US</span>
        </h1>
      </div>
    </div>
  );
}

export default AboutCover;
