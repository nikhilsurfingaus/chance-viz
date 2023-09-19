import React from 'react'
import Lottie from 'lottie-react';
import NoPage from '../animation/404.json'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {AiFillHome} from 'react-icons/ai'

const PageNotFound = () => {
  return (
    <div className='animate__animated animate__fadeIn' style={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
      <div style={{marginTop: '-50px'}}>
        <Lottie animationData={NoPage} style={{ height: '100%' }} />
      </div>
      <div>
        <Link to="/home">
          <button className='begin btn btn-primary mt-4'><span>RETURN HOME < AiFillHome className='mb-1' /> </span></button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound