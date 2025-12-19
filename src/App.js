import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    if (heightInMeters > 0 && weight > 0) {
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      let bmiMessage = '';
      if (bmiValue < 18.5) {
        bmiMessage = 'You are underweight';
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiMessage = 'You have a normal weight';
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        bmiMessage = 'You are overweight';
      } else {
        bmiMessage = 'You are obese';
      }
      setMessage(bmiMessage);
    } else {
      setBmi(null);
      setMessage('Please enter valid height and weight');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
          />
        </div>
        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
          />
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>
        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;