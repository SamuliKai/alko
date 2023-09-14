import { useState } from 'react';
import './App.css';

function App() {
  const [Weight, setweight] = useState('')
  const [bottles, setbottles] = useState('')
  const [gender, setgender] = useState('male')
  const [remaining, setremaining] = useState('')
  const [time, setTime] = useState ('')

  //function calculate
  const calculate = () => {
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = Weight / 10
    let remaining = grams - (burning * time)
    
    if (gender === 'male') {
      remaining = grams / (Weight * 0.7)  
    } else {
     remaining = grams / (Weight * 0.6)

    }
    setremaining(remaining)
  }

  return (
    <div id="container">
      <h3>Calculating blood alcohol level</h3>
      <div>
        <label>Weight</label>
        <input type='number' value={Weight} onChange={e => setweight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <input type='number' value={bottles} onChange={e => setbottles(e.target.value)}></input>
      </div>
        <div>
          <label>Time</label>
          <input type='number' value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setgender (e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setgender (e.target.value)}/><label>Female</label>
      </div>
      <div>
        <label>Result</label>
        <output>{Math.round(remaining*100)/100}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;
