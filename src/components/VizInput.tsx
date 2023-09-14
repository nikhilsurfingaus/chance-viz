import React, { useState } from 'react';
import './Viz.css';
import Lottie from 'lottie-react';

import {BiRefresh} from 'react-icons/bi'

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

const ratioBlurbData = [
  {
    ratio: 1,
    left: tennis,
    leftText: 'Tennis Ball',
    right: orange,
    rightText: 'Orange',
    blurb: 'Your chance of around a 100% successful outcome is similar in size of a Tennis Ball (You) to an Orange (Total). Both a Tennis Ball and Orange is typically about 6.7cm in diameter. They are small enough to fit comfortably in your hand.'
  },
  {
    ratio: 0.75,
    left: car,
    leftText: 'Car',
    right: van,
    rightText: 'Van SUV',
    blurb: 'Your chance of around a 75% successful outcome is similar in size of a Car (You) to a Van (Total). A Car is 4.8m in length. A Van SUV, in contrast, is larger and can be around 5.5m length.'
  },
  {
    ratio: 0.50,
    left: soccer,
    leftText: 'Soccer Field',
    right: nfl,
    rightText: 'NFL Field',
    blurb: 'Your chance of around a 50% successful outcome is similar in size of a Soccer Field (You) to an NFL Field (Total). For perspective you need 2 Soccer Fields to be the same size as an NFL Field.'
  },
    {
    ratio: 0.25,
    left: grape,
    leftText: 'Grape',
    right: burger,
    rightText: 'Burger',
    blurb: 'Your chance of around a 25% successful outcome is similar in size of a Grape (You) to a Burger (Total). For perspective you need 4 Grapes to be the same size as a Burger.'
  },
    {
    ratio: 0.10,
    left: pencil,
    leftText: 'Pencil',
    right: bottle,
    rightText: 'Bottle',
    blurb: 'Your chance of around a 10% successful outcome is similar in size of a Pencil (You) to a Bottle (Total). A Pencil is typically around 18cm in length and about 0.7cm in width. A bottle,  is typically about 20cm in height and 7cm in width. For perspective you need 10 Pencils to be the same size as a Bottle.'
  },
    {
    ratio: 0.05,
    left: marble,
    leftText: 'Marble',
    right: bowling,
    rightText: 'Bowling Ball',
    blurb: 'Your chance of around a 5% successful outcome is similar in size of a Marble (You) to a Bowling Ball (Total). A Marble is a small spherical toy, usually measuring about 1.5 cm in diameter. It is used in various games and activities. A Bowling Ball, used in the sport of bowling, is much larger, typically around 21cm in diameter and can weigh up to 7kg. For perspective you need 20 Marbles to be the same size as a Bowling Ball.'
  },
  {
    ratio: 0.01,
    left: dolphin,
    leftText: 'Dolphin',
    right: sub,
    rightText: 'Submarine',
    blurb: 'Your chance of around a 1% successful outcome is similar in size of a Dolphin (You) to a Submarine (Total).  A Dolphin measures around 4m in length. A Submarine, a watercraft designed for underwater operations reaches around 170m in length. For perspective you need 100 Dolphins to be the same size as a Submarine.'
  },
    {
    ratio: 0.005,
    left: phone,
    leftText: 'Phone Screen',
    right: cinema,
    rightText: 'Theatre Screen',
    blurb: 'Your chance of around a 0.5% successful outcome is similar in size of a Phone Screen (You) to a Theatre Screen (Total). A Phone Screen, found on most smartphones, can vary in size but is typically around 15cm in diagonal width. A Theatre Screen, used in cinemas and theaters, can be quite large, with some screens measuring over 10m in width. For perspective you need minimum 200 Phone Screens to be the same size as a Theatre Screen.'
  },
    {
    ratio: 0.0001,
    left: cell,
    leftText: 'Singular Cell',
    right: human,
    rightText: 'Human Hair',
    blurb: 'Your chance of around a 0.01% successful outcome is similar in size of a Singular Cell (You) to Human Hair (Total). A Singular Cell, the basic unit of life, is incredibly tiny, typically measuring only a few micrometers (microns) in size, which is about 0.0001cm. Human Hair strands are much larger, averaging around 50 to 100 micrometers (0.005 to 0.01 cm) in diameter. For perspective you need at least 10,000 Cells to be the same size as Human Hair.'
  },
  {
    ratio: 0.00001,
    left: sand,
    leftText: 'Grain Of Sand',
    right: beach,
    rightText: 'Barrel of Sand',
    blurb: 'Your chance of around a 0.001% successful outcome is similar in size of a Grain Of Sand (You) in a Barrel of Sand (Total). A Grain Of Sand is a minuscule particle, measuring around 0.05cm in diameter. A Barrel of Sand, containing countless grains of sand has dimensions of around 90cm height and 60cm in diameter. For perspective you need at least 100,000 Grains of Sand to be the same size as the Barrel of Sand.'
  },
  {
    ratio: 0.000001,
    left: molecule,
    leftText: 'Single Molecule',
    right: droplet,
    rightText: 'Water Droplet',
    blurb: 'Your chance of around a 0.0001% successful outcome is similar in size of a Single Molecule (You) in a Water Droplet (Total). A Single Molecule is incredibly small, often less than a nanometer 0.0000001cm in size. A Water Droplet can vary in size, but a typical small droplet might have a diameter of around 0.1cm. For perspective you need at least 1,000,000 Molecules to be the same size as the Water Droplet.'
  },
  {
    ratio: 0.0000001,
    left: coral,
    leftText: 'Total Coral',
    right: ocean,
    rightText: 'Total Ocean',
    blurb: 'Your chance of around a 0.00001% successful outcome is similar in size of all the Coral Reef (You) in the Worlds Ocean (Total). Total Coral, referring to the entire coral reef ecosystem, covers various sizes and shapes, but it is much smaller compared to the vastness of the ocean. The Worlds Ocean, covers approximately 361 million square kilometers, or 36,100,000,000,000,000,000,000 cm^2 in surface area. For perspective you need at least 10,000,000 Coral Reefs to be the same size as the Globes Ocean.'
  },
  {
    ratio: 50,
    left: star,
    leftText: 'Single Star',
    right: milky,
    rightText: 'Milky Way Galaxy',
    blurb: 'Your chance of around a 0.000002% successful outcome is similar in size of a Single Star (You) in the Milky Way Galaxy (Total). A Single Star, like our Sun, is a massive celestial object but relatively small on a cosmic scale. Its typically a few hundred thousand kilometers (km) in diameter. The Milky Way Galaxy, our home galaxy, is enormous, with a diameter of about 100,000 light-years, equivalent to approximately 9.46 x 10^17 kilometers (km).For perspective you need at least 50,000,000 Stars to be the same size as the Milky Way Galaxy.'
  },
  {
    ratio: 0.000000025,
    left: atom,
    leftText: 'Singular Atom',
    right: cosmos,
    rightText: 'Cosmos Universe',
    blurb: 'Your chance of around less than 0.000002% of a successful outcome is similar in size of a Single Atom (You) in the Cosmos Universe (Total). A Singular Atom is the tiniest unit of matter, with a size on the order of picometers 0.00000000001cm. The Cosmos Universe encompasses the entire known universe, including countless galaxies. Its size is estimated to be about 93 billion light-years in diameter, or roughly 8.8 x 10^26 kilometers (km). For perspective you need at least 100,000,000 Atoms to be the same size as the Cosmos Universe.'
  },
  // Add more ratio objects as needed
];

const ratioData = [
  {
    ratio: 1,
    left: tennis,
    leftText: 'Tennis Ball',
    right: orange,
    rightText: 'Orange',
    blurb: 'Your chance of around a 100% successful outcome is similar in size of a Tennis Ball (You) to an Orange (Total). Both a Tennis Ball and Orange is typically about 6.7cm in diameter. They are small enough to fit comfortably in your hand.'
  },
  {
    ratio: 0.75,
    left: car,
    leftText: 'Car',
    right: van,
    rightText: 'Van SUV',
    blurb: 'Your chance of around a 75% successful outcome is similar in size of a Car (You) to a Van (Total). A Car is 4.8m in length. A Van SUV, in contrast, is larger and can be around 5.5m length.'
  },
  {
    ratio: 0.50,
    left: soccer,
    leftText: 'Soccer Field',
    right: nfl,
    rightText: 'NFL Field',
    blurb: 'Your chance of around a 50% successful outcome is similar in size of a Soccer Field (You) to an NFL Field (Total). For perspective you need 2 Soccer Fields to be the same size as an NFL Field.'
  },
    {
    ratio: 0.25,
    left: grape,
    leftText: 'Grape',
    right: burger,
    rightText: 'Burger',
    blurb: 'Your chance of around a 25% successful outcome is similar in size of a Grape (You) to a Burger (Total). For perspective you need 4 Grapes to be the same size as a Burger.'
  },
    {
    ratio: 0.10,
    left: pencil,
    leftText: 'Pencil',
    right: bottle,
    rightText: 'Bottle',
    blurb: 'Your chance of around a 10% successful outcome is similar in size of a Pencil (You) to a Bottle (Total). A Pencil is typically around 18cm in length and about 0.7cm in width. A bottle,  is typically about 20cm in height and 7cm in width. For perspective you need 10 Pencils to be the same size as a Bottle.'
  },
    {
    ratio: 0.05,
    left: marble,
    leftText: 'Marble',
    right: bowling,
    rightText: 'Bowling Ball',
    blurb: 'Your chance of around a 5% successful outcome is similar in size of a Marble (You) to a Bowling Ball (Total). A Marble is a small spherical toy, usually measuring about 1.5 cm in diameter. It is used in various games and activities. A Bowling Ball, used in the sport of bowling, is much larger, typically around 21cm in diameter and can weigh up to 7kg. For perspective you need 20 Marbles to be the same size as a Bowling Ball.'
  },
  {
    ratio: 0.01,
    left: dolphin,
    leftText: 'Dolphin',
    right: sub,
    rightText: 'Submarine',
    blurb: 'Your chance of around a 1% successful outcome is similar in size of a Dolphin (You) to a Submarine (Total).  A Dolphin measures around 4m in length. A Submarine, a watercraft designed for underwater operations reaches around 170m in length. For perspective you need 100 Dolphins to be the same size as a Submarine.'
  },
    {
    ratio: 0.005,
    left: phone,
    leftText: 'Phone Screen',
    right: cinema,
    rightText: 'Theatre Screen',
    blurb: 'Your chance of around a 0.5% successful outcome is similar in size of a Phone Screen (You) to a Theatre Screen (Total). A Phone Screen, found on most smartphones, can vary in size but is typically around 15cm in diagonal width. A Theatre Screen, used in cinemas and theaters, can be quite large, with some screens measuring over 10m in width. For perspective you need minimum 200 Phone Screens to be the same size as a Theatre Screen.'
  },
    {
    ratio: 0.0001,
    left: cell,
    leftText: 'Singular Cell',
    right: human,
    rightText: 'Human Hair',
    blurb: 'Your chance of around a 0.01% successful outcome is similar in size of a Singular Cell (You) to Human Hair (Total). A Singular Cell, the basic unit of life, is incredibly tiny, typically measuring only a few micrometers (microns) in size, which is about 0.0001cm. Human Hair strands are much larger, averaging around 50 to 100 micrometers (0.005 to 0.01 cm) in diameter. For perspective you need at least 10,000 Cells to be the same size as Human Hair.'
  },
  {
    ratio: 0.00001,
    left: sand,
    leftText: 'Grain Of Sand',
    right: beach,
    rightText: 'Barrel of Sand',
    blurb: 'Your chance of around a 0.001% successful outcome is similar in size of a Grain Of Sand (You) in a Barrel of Sand (Total). A Grain Of Sand is a minuscule particle, measuring around 0.05cm in diameter. A Barrel of Sand, containing countless grains of sand has dimensions of around 90cm height and 60cm in diameter. For perspective you need at least 100,000 Grains of Sand to be the same size as the Barrel of Sand.'
  },
  {
    ratio: 0.000001,
    left: molecule,
    leftText: 'Single Molecule',
    right: droplet,
    rightText: 'Water Droplet',
    blurb: 'Your chance of around a 0.0001% successful outcome is similar in size of a Single Molecule (You) in a Water Droplet (Total). A Single Molecule is incredibly small, often less than a nanometer 0.0000001cm in size. A Water Droplet can vary in size, but a typical small droplet might have a diameter of around 0.1cm. For perspective you need at least 1,000,000 Molecules to be the same size as the Water Droplet.'
  },
  {
    ratio: 0.0000001,
    left: coral,
    leftText: 'Total Coral',
    right: ocean,
    rightText: 'Total Ocean',
    blurb: 'Your chance of around a 0.00001% successful outcome is similar in size of all the Coral Reef (You) in the Worlds Ocean (Total). Total Coral, referring to the entire coral reef ecosystem, covers various sizes and shapes, but it is much smaller compared to the vastness of the ocean. The Worlds Ocean, covers approximately 361 million square kilometers, or 36,100,000,000,000,000,000,000 cm^2 in surface area. For perspective you need at least 10,000,000 Coral Reefs to be the same size as the Globes Ocean.'
  },
  {
    ratio: 50,
    left: star,
    leftText: 'Single Star',
    right: milky,
    rightText: 'Milky Way Galaxy',
    blurb: 'Your chance of around a 0.000002% successful outcome is similar in size of a Single Star (You) in the Milky Way Galaxy (Total). A Single Star, like our Sun, is a massive celestial object but relatively small on a cosmic scale. Its typically a few hundred thousand kilometers (km) in diameter. The Milky Way Galaxy, our home galaxy, is enormous, with a diameter of about 100,000 light-years, equivalent to approximately 9.46 x 10^17 kilometers (km).For perspective you need at least 50,000,000 Stars to be the same size as the Milky Way Galaxy.'
  },
  {
    ratio: 0.000000025,
    left: atom,
    leftText: 'Singular Atom',
    right: cosmos,
    rightText: 'Cosmos Universe',
    blurb: 'Your chance of around less than 0.000002% of a successful outcome is similar in size of a Single Atom (You) in the Cosmos Universe (Total). A Singular Atom is the tiniest unit of matter, with a size on the order of picometers 0.00000000001cm. The Cosmos Universe encompasses the entire known universe, including countless galaxies. Its size is estimated to be about 93 billion light-years in diameter, or roughly 8.8 x 10^26 kilometers (km). For perspective you need at least 100,000,000 Atoms to be the same size as the Cosmos Universe.'
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
  const [blurbRatio, setBlurbRatio] = useState(0)

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
        setBlurbRatio(0.0000001); // Manually set the ratio for this
      }  else if (value === '1 in 50 million') {
          // Handle the special case of "1 in 50 million"
          setData({
            entry: 0,
            chance: 0,
            percentage: 0.000002,
          });
          setRatio(50); // Manually set the ratio for this case
          setBlurbRatio(50); // Manually set the ratio for this
      } else if (value === '1 in 100 million') {
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
                  <div key={ratioItem.ratio} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='sids'>
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
                      <p style={{ fontSize: '1.5rem' }}>{ratioItem.blurb}</p>
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
