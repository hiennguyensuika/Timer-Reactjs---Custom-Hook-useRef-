import React from 'react'
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import "./App.css";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0); /*custom hook - userTime*/

  return (
    <div className="App">
      <div className='container'>
      <h1 className='timer-name'>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p className="time-box">{formatTime(time)}</p> {/* it show result getHour/getMinute/getSecond. btw cause writing note
          in the return, to write JS in JSX , use {}, otherwise it will show directly the text on UI
          P/s:  return statement is used within a functional component to specify the JSX (JavaScript XML) code that will be rendered. 
          JSX allows you to write HTML-like code within your JavaScript code.
          To include JavaScript expressions or variables within the JSX code, 
          you can indeed use curly braces {}. This syntax is used to embed dynamic JavaScript code within the JSX.
          */}
        </div>
        <div className="button__wrapper">
          <button className="button-time" onClick={stopTimer}>
            Stop
          </button>
          <button className="button-time" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button-time" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

