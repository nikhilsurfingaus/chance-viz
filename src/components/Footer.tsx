import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Footer.css';

const Foot = () => {
  return (
    <div className='text-white' style={{backgroundColor: '#0b5ed7', padding: '1rem', width: '100%', margin: 'auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'black' }}>
            <img
              alt="logo"
              src={logo}
              width="50px"
              style={{ marginRight: '2rem' }}
            />
            <span className="h5 font-weight-bold"></span>
          </a>
        </div>
        <div className='ftext'>
          <small>&copy; Chance Viz, 2023. All rights reserved.</small>
        </div>
        <div style={{ display: 'flex'}} className='text-white'>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <button className="social-btn">
              <FaFacebookF />
            </button>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <button className="social-btn twitter"> {/* Add the class 'twitter' here */}
              <FaTwitter />
            </button>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <button className="social-btn instagram"> {/* Add the class 'instagram' here */}
              <FaInstagram />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foot;