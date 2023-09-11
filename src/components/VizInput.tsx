import React, { useState } from 'react';

const VizInput = () => {
  const [data, setData] = useState({
    entry: 0,
    chance: 0,
    percentage: 0,
  });

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
    if (
      data.percentage < 0 ||
      data.percentage > 100
    ) {
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
    } else if (data.percentage !== 0) {
      // Use the selected percentage value
      console.log(`Chance as a percentage: ${data.percentage}%`);
    } else if (data.chance >= data.entry) {
      // Calculate the percentage
      console.log(`Chance as a percentage: ${(data.entry / data.chance) * 100}%`);
    } else {
      alert('Invalid input: Entry should be less than or equal to Chance.');
    }
  
    setDisplayRes(true);
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
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Enter Data To Visualize</h2>
          <div>
            <p>Chance of</p>
            <input
              type="number"
              name="entry"
              placeholder="Enter the total entry"
              value={data.entry.toString()} // Cast the value to a string
              onChange={handleChange}
              required
              disabled={data.percentage !== 0} // Disable if a percentage is selected
            />
            <p>in</p>
            <input
              type="number"
              name="chance"
              placeholder="Enter the total chance"
              value={data.chance.toString()} // Cast the value to a string
              onChange={handleChange}
              required
              disabled={data.percentage !== 0} // Disable if a percentage is selected
            />
          </div>
          <p>OR</p>
          <div>
            <select
              name="percentage"
              value={data.percentage}
              onChange={handleChange}
              disabled={data.entry !== 0 || data.chance !== 0}
            >
              <option value={0}>0%</option>
              <option value={10}>10%</option>
              <option value={20}>20%</option>
              <option value={30}>30%</option>
              <option value={40}>40%</option>
              <option value={50}>50%</option>
              <option value={60}>60%</option>
              <option value={70}>70%</option>
              <option value={80}>80%</option>
              <option value={90}>90%</option>
              <option value={100}>100%</option>
            </select>
          </div>
          <div>
            <button type="submit">Generate Visual</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default VizInput;
