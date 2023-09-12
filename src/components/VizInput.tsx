import React, { useState } from 'react';
import './Viz.css';
import Lottie from 'lottie-react';

//Import Animations Later Put In DataJs Store

//100%
import tennis from '../animation/visAnimate/tennis.json'
import orange from '../animation/visAnimate/orange.json'

const ratioData = [
  {
    ratio: 1,
    left: tennis,
    leftText: 'Tennis Ball',
    right: orange,
    rightText: 'Orange',
  },
  // Add more ratio objects as needed
];


const VizInput = () => {
  const [data, setData] = useState({
    entry: 0,
    chance: 0,
    percentage: 0,
  });

  const [ratio, setRatio] = useState(0)

  const [displayRes, setDisplayRes] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    // If the "percentage" select is changed, reset the chance and entry fields
    if (name === 'percentage') {
      setData({
        entry: 0,
        chance: 0,
        percentage: parseFloat(value),
      });
    } else {
      setData({
        ...data,
        [name]: name === 'chance' ? parseFloat(value) : value,
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

    if (data.entry === 0 && data.chance === 0) {
      // Both "Chance" and "Entry" are blank, use 0 for the calculation
      console.log(`Chance as a percentage: ${data.percentage}%`);
      setRatio(data.percentage/100)
      setDisplayRes(true);
    } else if (data.percentage !== 0) {
      // Use the selected percentage value
      console.log(`Chance as a percentage: ${data.percentage}%`);
      setRatio(data.percentage/100)
      setDisplayRes(true);
    } else if (data.chance >= data.entry) {
      // Calculate the percentage
      console.log(`Chance as a percentage: ${(data.entry / data.chance) * 100}%`);
      setRatio(data.entry / data.chance)
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
    setDisplayRes(false);
  };

  return (
    <div style={{ backgroundColor: 'white', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {displayRes ? (
        <div>
        <button onClick={handleSwitch}>Back to Input</button>
        <div>Result</div>
        <p>Chance Ratio: {ratio}</p>
        {ratioData.map((ratioItem) => {
          if (ratio === ratioItem.ratio) {
            return (
              <div key={ratioItem.ratio} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Lottie animationData={ratioItem.left} style={{ height: '120%' }} />
                  <p>{ratioItem.leftText}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <Lottie animationData={ratioItem.right} style={{ height: '120%' }} />
                  <p>{ratioItem.rightText}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      ) : (
        <form className='frm' onSubmit={handleSubmit}>
          <h2 className='mb-5' style={{fontWeight: 'bold', fontSize: '2.5rem'}}>Enter Data To Visualize</h2>
          <div className="sentence">
            <p className='mb-1'>Chance of</p>
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
                borderRadius: '10px' // Set the border color to white // Smaller font size
              }}
              disabled={data.percentage !== 0}
            />
            <p className='mb-1'>in</p>
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
                borderRadius: '10px' // Set the border color to white // Smaller font size
              }}
              disabled={data.percentage !== 0}
            />
          </div>
          <p style={{fontSize: '2rem', fontWeight: 'bold'}}>OR</p>
          <div>
            <select
            className='mb-4'
              name="percentage"
              value={data.percentage}
              onChange={handleChange}
              disabled={data.entry !== 0 || data.chance !== 0}
              style={{
                color: 'white',
                width: '4rem',
                backgroundColor: 'transparent', // Transparent background
                fontSize: '14px',
                border: '3px solid white', 
                borderRadius: '10px' // Set the border color to white // Smaller font size
              }}
            >
              <option style={{ color: 'black' }} value={0}>0%</option>
              <option style={{ color: 'black' }} value={10}>10%</option>
              <option style={{ color: 'black' }} value={20}>20%</option>
              <option style={{ color: 'black' }} value={30}>30%</option>
              <option style={{ color: 'black' }} value={40}>40%</option>
              <option style={{ color: 'black' }} value={50}>50%</option>
              <option style={{ color: 'black' }} value={60}>60%</option>
              <option style={{ color: 'black' }} value={70}>70%</option>
              <option style={{ color: 'black' }} value={80}>80%</option>
              <option style={{ color: 'black' }} value={90}>90%</option>
              <option style={{ color: 'black' }} value={100}>100%</option>
            </select>
          </div>
          <div>
            <button className='btn generate' type="submit">Generate Visual</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VizInput;
