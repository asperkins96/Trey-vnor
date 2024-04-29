import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = parseInt(localStorage.getItem('count'), 10);
    if (!isNaN(savedCount)) {
      setCount(savedCount);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 86400000);

    return () => clearInterval(interval);
  }, []);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Days since last Trevor/Treynor Incident</h1>
        <p>Count: {count}</p>
        <button onClick={resetCount}>Reset</button>
      </header>
    </div>
  );
}

export default App;