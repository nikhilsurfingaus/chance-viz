import React, { useState } from 'react';
import './Viz.css';
import Lottie from 'lottie-react';

import {BiRefresh} from 'react-icons/bi'

import { ratioBlurbData, ratioData } from './VisualData'; // Adjust the import path as needed

import dataTrans from '../animation/dataTransform.json';

const VizInput = () => {
  const [data, setData] = useState({
    entry: 0,
    chance: 0,
    percentage: 0,
  });

  const [ratio, setRatio] = useState(0)
  const [blurbRatio, setBlurbRatio] = useState(0)

  const [displayRes, setDisplayRes] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
  
    if (name === 'percentage') {
      if (value === '10000000') {
        // Handle the special case of "1 in 10 million"
        setData({
          entry: 0,
          chance: 0,
          percentage: 0.00001,
        });
        setRatio(0.0000001); // Manually set the ratio for this case
        setBlurbRatio(0.0000001); // Manually set the ratio for this
      }  else if (value === '50000000') {
          // Handle the special case of "1 in 50 million"
          setData({
            entry: 0,
            chance: 0,
            percentage: 0.000002,
          });
          setRatio(50); // Manually set the ratio for this case
          setBlurbRatio(50); // Manually set the ratio for this
      } else if (value === '100000000') {
          // Handle the special case of "1 in 100 million"
          setData({
            entry: 0,
            chance: 0,
            percentage: 0.0000025,
          });
          setRatio(0.000000025); // Manually set the ratio for this case
          setBlurbRatio(0.000000025)
      } else {
        // Handle other percentage values
        setData({
          entry: 0,
          chance: 0,
          percentage: parseFloat(value),
        });
      }
    } else if (name === 'entry' || name === 'chance') {
      // Handle the "entry" and "chance" input fields
      setData({
        ...data,
        [name]: parseFloat(value),
      });
    }
  };
  

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Additional validation checks
    if (data.percentage < 0 || data.percentage > 100) {
      alert('Invalid input: Percentage should be between 0 and 100.');
      setData({
        entry: 0,
        chance: 0,
        percentage: 0,
      });
      return; // Exit the function without generating visual
    }

      // Check if both inputs are zero or the selected percentage is 0%
    if ((data.entry === 0 && data.chance === 0) && data.percentage === 0) {
      alert('Invalid input: Either both inputs are zero or the selected percentage is 0%.');
      setData({
        entry: 0,
        chance: 0,
        percentage: 0,
      });
      return; // Exit the function without generating visual
    }

    console.log('ratio is: ', ratio)
    if (ratio === 0.0000001 || ratio === 50  || ratio === 0.000000025 ) {
      setDisplayRes(true);
      return
    }

    if (data.entry === 0 && data.chance === 0) {
      // Both "Chance" and "Entry" are blank, use 0 for the calculation
      console.log(`Chance as a percentage: ${data.percentage}%`);
      setRatio(data.percentage/100)
      setBlurbRatio(data.percentage/100)
      setDisplayRes(true);
    } else if (data.percentage !== 0) {
      // Use the selected percentage value
      console.log(`Chance as a percentage: ${data.percentage}%`);
      setRatio(data.percentage/100)
      setBlurbRatio(data.percentage/100)
      setDisplayRes(true);
    } else if (data.chance >= data.entry) {
      // Calculate the percentage
      console.log(`Chance as a percentage: ${(data.entry / data.chance) * 100}%`);


      if ((data.entry / data.chance) < 1.0 && (data.entry / data.chance) >= 0.75 ){
        setRatio(0.75)
        setBlurbRatio(0.75)
      } else if ((data.entry / data.chance) < 0.75 && (data.entry / data.chance) >= 0.5 )  {
        setRatio(0.5)
        setBlurbRatio(0.5)
      } else if ((data.entry / data.chance) < 0.5 && (data.entry / data.chance) >= 0.25 ) {
        setRatio(0.25)
        setBlurbRatio(0.25)
      } else if ((data.entry / data.chance) < 0.25 && (data.entry / data.chance) >= 0.1 ) {
        setRatio(0.1)
        setBlurbRatio(0.1)
      } else if ((data.entry / data.chance) < 0.1 && (data.entry / data.chance) >= 0.05 ) {
        setRatio(0.05)
        setBlurbRatio(0.05)
      }   else if ((data.entry / data.chance) < 0.05 && (data.entry / data.chance) >= 0.01 ) {
        setRatio(0.01)
        setBlurbRatio(0.01)
      }   else if ((data.entry / data.chance) < 0.01 && (data.entry / data.chance) >= 0.005 ) {
        setRatio(0.005)
        setBlurbRatio(0.005)
      }   else if ((data.entry / data.chance) < 0.005 && (data.entry / data.chance) >= 0.0001 ) {
        setRatio(0.0001)
        setBlurbRatio(0.0001)
      }   else if ((data.entry / data.chance) < 0.0001 && (data.entry / data.chance) >= 0.00001 ) {
        setRatio(0.00001)
        setBlurbRatio(0.00001)
      }   else if ((data.entry / data.chance) < 0.00001 && (data.entry / data.chance) >= 0.000001 ) {
        setRatio(0.000001) 
        setBlurbRatio(0.000001)
      }  else if ((data.entry / data.chance) < 0.000001 && (data.entry / data.chance) >= 0.0000001 ) {
        setRatio(0.0000001) 
        setBlurbRatio(0.0000001)
      } else if ((data.entry / data.chance) < 0.0000001 && (data.entry / data.chance) >= 0.00000002 ) {
        setRatio(50) 
        setBlurbRatio(50)
      } else if ((data.entry / data.chance) < 0.00000002) {
        setRatio(0.000000025) 
        setBlurbRatio(0.000000025)
      } else {
        setRatio(data.entry / data.chance)
        setBlurbRatio(data.entry / data.chance)
      }
      setDisplayRes(true);
    } else {
      alert('Invalid input: Entry should be less than or equal to Chance.');
      setData({
        entry: 0,
        chance: 0,
        percentage: 0,
      });
      setDisplayRes(false);
    }

  };

  const handleSwitch = () => {
    setData({
      entry: 0,
      chance: 0,
      percentage: 0,
    });
    setRatio(0)
    setBlurbRatio(0)
    setDisplayRes(false);
  };

  return (
    <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
{displayRes ? (
        <div style={{height: '100%'}} >
          <h1 className='mt-3 titti inspire-heading' >Your Chance Visualised</h1>
          <div className='mt-5 lot mx-auto' style={{ display: 'flex', width: '70%',background: '#1479ed' }}>
            {ratioData.map((ratioItem) => {
              if (ratio === ratioItem.ratio) {
                return (
                  <div key={ratioItem.ratio} style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className='sids'>
                    <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.93)' }}>
                      <Lottie className='ani' animationData={ratioItem.left} style={{ height: '400px' }} />
                      <p style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{ratioItem.leftText} (You)</p>
                    </div>
                    <div style={{ flex: 1, background: '#1479ed', color: 'white', borderRadius: '15px'}}>
                      <Lottie className='ani' animationData={ratioItem.right} style={{ height: '400px'}} />
                      <p style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{ratioItem.rightText} (Total)</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className='stats mt-5 pb-5'>
            <div className='w-50 mx-auto blur'>
            {ratioBlurbData.map((ratioItem) => {
                if (blurbRatio === ratioItem.ratio) {
                  return ( 
                    <div style={{background: '#1479ed', color:'white', padding: '10px 10px 10px 10px', borderRadius: '15px'}}>
                      <p style={{ fontSize: '1.3rem' }}>{ratioItem.blurb}</p>
                    </div>
                  )
                }
                return null
              })}
            </div>
            <button style={{background: '#1479ed', color: 'white'}} className='btn mt-4' onClick={handleSwitch}>New Visualisation <BiRefresh style={{fontSize: '1.5rem'}} /></button>
          </div>
      </div>
      ) : (
        <div style={{height: '95vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h1 className='tits inspire-heading' >Enter Data To Visualize</h1>
          <form className='animate__animated animate__fadeIn frm' onSubmit={handleSubmit}>
          <div className="sentence">
            <p className='mb-1 fw-bold'>Chance of</p>
            <input
              type="number"
              name="entry"
              placeholder="Entry"
              value={data.entry.toString()}
              onChange={handleChange}
              required
              style={{
                color: 'white',
                width: '4rem',
                backgroundColor: 'transparent', // Transparent background
                fontSize: '14px',
                border: '3px solid white', // Set the border color to white // Smaller font size
                borderRadius: '10px', // Set the border color to white // Smaller font size
                display: 'flex',               // Use flexbox
                justifyContent: 'center',     // Center horizontally
                alignItems: 'center',         // Center vertically
                textAlign: 'center',          // Center text horizontally
              }}
              disabled={data.percentage !== 0}
            />
            <p className='mb-1 fw-bold'>in</p>
            <input
              type="number"
              name="chance"
              placeholder="Chance"
              value={data.chance.toString()}
              onChange={handleChange}
              required
              style={{
                color: 'white',
                width: '8rem',
                backgroundColor: 'transparent', // Transparent background
                fontSize: '14px', // Smaller font size
                border: '3px solid white', // Set the border color to white
                borderRadius: '10px', // Set the border color to white // Smaller font size
                display: 'flex',               // Use flexbox
                justifyContent: 'center',     // Center horizontally
                alignItems: 'center',         // Center vertically
                textAlign: 'center',   
              }}
              disabled={data.percentage !== 0}
            />
          </div>
          <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>OR</p>
          <div>
            <select
            className='mb-4'
              name="percentage"
              value={data.percentage.toString()}
              onChange={handleChange}
              disabled={data.entry !== 0 || data.chance !== 0}
              style={{
                color: 'white',
                width: '10rem',
                backgroundColor: 'transparent', // Transparent background
                fontSize: '14px',
                border: '3px solid white', 
                borderRadius: '10px' // Set the border color to white // Smaller font size
              }}
            >
              <option style={{ color: 'black' }} value={0}>0%</option>
              <option style={{ color: 'black' }} value={100000000}>1 in 100 million</option>
              <option style={{ color: 'black' }} value={50000000}>1 in 50 million</option>
              <option style={{ color: 'black' }} value={10000000}>1 in 10 million</option>
              <option style={{ color: 'black' }} value={0.0001}>1 in 1 million</option>
              <option style={{ color: 'black' }} value={0.001}>0.001%</option>
              <option style={{ color: 'black' }} value={0.01}>0.01%</option>
              <option style={{ color: 'black' }} value={0.5}>0.5%</option>
              <option style={{ color: 'black' }} value={1}>1%</option>
              <option style={{ color: 'black' }} value={5}>5%</option>
              <option style={{ color: 'black' }} value={10}>10%</option>
              <option style={{ color: 'black' }} value={25}>25%</option>
              <option style={{ color: 'black' }} value={50}>50%</option>
              <option style={{ color: 'black' }} value={75}>75%</option>
              <option style={{ color: 'black' }} value={100}>100%</option>
            </select>
          </div>
          <div>
            <button className='btn generate mt-4' type="submit">Generate Visual</button>
          </div>
        </form>
        <div className="privacy mt-5">
            <p>*Your privacy is important to us, and we do not collect any personal data during your interaction with our service.</p>
        </div>
        <div className='trans'>
          <Lottie className='bott' animationData={dataTrans} style={{ height: '200px' }} />
        </div>
        </div>
      )}
    </div>
  );
};

export default VizInput;
