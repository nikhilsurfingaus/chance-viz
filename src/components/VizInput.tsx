import React, { useState } from 'react';
import './Viz.css';
import Lottie from 'lottie-react';

//Import Animations Later Put In DataJs Store

//100%
import tennis from '../animation/visAnimate/tennis.json'
import orange from '../animation/visAnimate/orange.json'

//75%
import van from '../animation/visAnimate/van.json'
import car from '../animation/visAnimate/car.json'

//50%
import nfl from '../animation/visAnimate/nfl.json'
import soccer from '../animation/visAnimate/soccer.json'

//25%
import grape from '../animation/visAnimate/grape.json'
import burger from '../animation/visAnimate/burger.json'

//10%
import pencil from '../animation/visAnimate/pencil.json'
import bottle from '../animation/visAnimate/bottle.json'

//5%
import marble from '../animation/visAnimate/marble.json'
import bowling from '../animation/visAnimate/bowling.json'

//1%
import dolphin from '../animation/visAnimate/dolphin.json'
import sub from '../animation/visAnimate/submarine.json'

//0.5%
import phone from '../animation/visAnimate/phone.json'
import cinema from '../animation/visAnimate/cinema.json'

//0.01%
import cell from '../animation/visAnimate/cell.json'
import human from '../animation/visAnimate/human.json'

//0.001%
import sand from '../animation/visAnimate/sand.json'
import beach from '../animation/visAnimate/beach.json'

//0.0001%
import molecule from '../animation/visAnimate/molecule.json'
import droplet from '../animation/visAnimate/droplet.json'

//0.00001%
import coral from '../animation/visAnimate/coral.json'
import ocean from '../animation/visAnimate/world.json'

//0.000002%
import star from '../animation/visAnimate/star.json'
import milky from '../animation/visAnimate/galaxy.json'

// < 0.000002%
import atom from '../animation/visAnimate/atom.json'
import cosmos from '../animation/visAnimate/cosmos.json'

const ratioData = [
  {
    ratio: 1,
    left: tennis,
    leftText: 'Tennis Ball',
    right: orange,
    rightText: 'Orange',
  },
  {
    ratio: 0.75,
    left: car,
    leftText: 'Car',
    right: van,
    rightText: 'Van SUV',
  },
  {
    ratio: 0.50,
    left: soccer,
    leftText: 'Soccer Field',
    right: nfl,
    rightText: 'NFL Field',
  },
    {
    ratio: 0.25,
    left: grape,
    leftText: 'Grape',
    right: burger,
    rightText: 'Burger',
  },
    {
    ratio: 0.10,
    left: pencil,
    leftText: 'Pencil',
    right: bottle,
    rightText: 'Bottle',
  },
    {
    ratio: 0.05,
    left: marble,
    leftText: 'Marble',
    right: bowling,
    rightText: 'Bowling Ball',
  },
  {
    ratio: 0.01,
    left: dolphin,
    leftText: 'Dolphin',
    right: sub,
    rightText: 'Submarine',
  },
    {
    ratio: 0.005,
    left: phone,
    leftText: 'Phone Screen',
    right: cinema,
    rightText: 'Theatre Screen',
  },
    {
    ratio: 0.0001,
    left: cell,
    leftText: 'Singular Cell',
    right: human,
    rightText: 'Human Body',
  },
  {
    ratio: 0.00001,
    left: sand,
    leftText: 'Grain Of Sand',
    right: beach,
    rightText: 'Beach',
  },
  {
    ratio: 0.000001,
    left: molecule,
    leftText: 'Single Molecule',
    right: droplet,
    rightText: 'Water Droplet',
  },
  {
    ratio: 0.0000001,
    left: coral,
    leftText: 'Total Coral',
    right: ocean,
    rightText: 'Total Ocean',
  },
  {
    ratio: 50,
    left: star,
    leftText: 'Single Star',
    right: milky,
    rightText: 'Milky Way Galaxy',
  },
  {
    ratio: 0.000000025,
    left: atom,
    leftText: 'Singular Atom',
    right: cosmos,
    rightText: 'Cosmos Universe',
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
  
    if (name === 'percentage') {
      if (value === '1 in 10 million') {
        // Handle the special case of "1 in 10 million"
        setData({
          entry: 0,
          chance: 0,
          percentage: 0.00001,
        });
        setRatio(0.0000001); // Manually set the ratio for this case
      }  else if (value === '1 in 50 million') {
          // Handle the special case of "1 in 50 million"
          setData({
            entry: 0,
            chance: 0,
            percentage: 0.000002,
          });
          setRatio(50); // Manually set the ratio for this case
      } else if (value === '1 in 100 million') {
          // Handle the special case of "1 in 100 million"
          setData({
            entry: 0,
            chance: 0,
            percentage: 0.0000025,
          });
          setRatio(0.000000025); // Manually set the ratio for this case
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

    console.log('ratio is: ', ratio)
    if (ratio === 0.0000001 || ratio === 50  || ratio === 0.000000025 ) {
      setDisplayRes(true);
      return
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


      if ((data.entry / data.chance) < 1.0 && (data.entry / data.chance) >= 0.75 ){
        setRatio(0.75)
      } else if ((data.entry / data.chance) < 0.75 && (data.entry / data.chance) >= 0.5 )  {
        setRatio(0.5)
      } else if ((data.entry / data.chance) < 0.5 && (data.entry / data.chance) >= 0.25 ) {
        setRatio(0.25)
      } else if ((data.entry / data.chance) < 0.25 && (data.entry / data.chance) >= 0.1 ) {
        setRatio(0.1)
      } else if ((data.entry / data.chance) < 0.1 && (data.entry / data.chance) >= 0.05 ) {
        setRatio(0.05)
      }   else if ((data.entry / data.chance) < 0.05 && (data.entry / data.chance) >= 0.01 ) {
        setRatio(0.01)
      }   else if ((data.entry / data.chance) < 0.01 && (data.entry / data.chance) >= 0.005 ) {
        setRatio(0.005)
      }   else if ((data.entry / data.chance) < 0.005 && (data.entry / data.chance) >= 0.0001 ) {
        setRatio(0.0001)
      }   else if ((data.entry / data.chance) < 0.0001 && (data.entry / data.chance) >= 0.00001 ) {
        setRatio(0.00001)
      }   else if ((data.entry / data.chance) < 0.00001 && (data.entry / data.chance) >= 0.000001 ) {
        setRatio(0.000001) 
      }  else if ((data.entry / data.chance) < 0.000001 && (data.entry / data.chance) >= 0.0000001 ) {
        setRatio(0.0000001) 
      } else if ((data.entry / data.chance) < 0.0000001 && (data.entry / data.chance) >= 0.00000002 ) {
        setRatio(50) 
      } else if ((data.entry / data.chance) < 0.00000002) {
        setRatio(0.000000025) 
      } else {
        setRatio(data.entry / data.chance)
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
    setDisplayRes(false);
  };

  return (
    <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
{displayRes ? (
        <div style={{height: '200vh'}} >
          <h1 className='mt-3 titti inspire-heading' >Your Chance Visualised</h1>
          <div className='mt-5 lot' style={{ display: 'flex', width: '100%', background: '#1479ed' }}>
            {ratioData.map((ratioItem) => {
              if (ratio === ratioItem.ratio) {
                return (
                  <div key={ratioItem.ratio} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='sids'>
                    <div>
                    </div>
                    <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.93)' }}>
                      <Lottie animationData={ratioItem.left} style={{ height: '400px' }} />
                      <p style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{ratioItem.leftText}</p>
                    </div>
                    <div style={{ flex: 1, background: '#1479ed', color: 'white', borderRadius: '15px'}}>
                      <Lottie className='ani' animationData={ratioItem.right} style={{ height: '400px'}} />
                      <p style={{fontSize: '2.5rem', fontWeight: 'bold'}}>{ratioItem.rightText}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className='stats mt-5'>
            <button onClick={handleSwitch}>Back to Input</button>
            <div>Result</div>
            <p>Chance Ratio: {ratio}</p>
          </div>
      </div>
      ) : (
        <div style={{height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                width: '10rem',
                backgroundColor: 'transparent', // Transparent background
                fontSize: '14px',
                border: '3px solid white', 
                borderRadius: '10px' // Set the border color to white // Smaller font size
              }}
            >
              <option style={{ color: 'black' }} value={0}>0%</option>
              <option style={{ color: 'black' }} value={'1 in 100 million'}>1 in 100 million</option>
              <option style={{ color: 'black' }} value={'1 in 50 million'}>1 in 50 million</option>
              <option style={{ color: 'black' }} value={'1 in 10 million'}>1 in 10 million</option>
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
            <button className='btn generate' type="submit">Generate Visual</button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
};

export default VizInput;
