import React, {useState} from 'react';
import './style.css';

function App(){
  const quotes = ["Believe in yourself", "Don't give up", "Keep pushing forward", "Stay Positive", 
  "You are stonger than you think", "Dream big and dare to fail", "Work hard, eat well, and sleep plenty"];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  } 

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <div className='box'>
        <p>Your Quote of the day: {quote}</p>
        <button onClick={getRandomQuote}>Generate Quote</button>
      </div>
    </div>
  )
}

export default App;
