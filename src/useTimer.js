import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  /* time and setTime: explain the code following the map of from line 4 (value = 0) 
and change to line 30 setTime is placed in startTimer -> line 51, 
and lastly we have time to use in formatTimer()
*/
  const isStart = useRef(true);
  const active = useRef();
  /*
  active is another reference variable created using the useRef hook. 
  It is used to store a reference to an HTML button element,
  presumably the button that starts the timer. It allows the code to disable or enable the button based on the timer's state. 
  When the timer is running, the button is disabled to prevent multiple simultaneous timers.
  _ apply to only to Start Button, 
  cause when users click and it gets active the Start Button could not re-click, unless you click Stop or Reset
  */
  const refInterval = useRef(0);


  const startTimer = () => {
    active.current.disabled = true; 
    /*Therefore, active.current.disabled is used to access the disabled property of the referenced button element.
     By setting it to true, the button is disabled, and users cannot interact with it. Similarly, 
     setting it to false enables the button, 
     allowing users to interact with it again. */
    // isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1); /*time here is total current time */
      }
    }, 1000);
    /*for this refInterval.current = setInterval((), we change the value of refInterval to new value with setInterval function  */
  };
  const stopTimer = () => {
    // isStart.current = false;
    /* without this code isStart.current = false;, 
    when users click start again it still continue counting */
    clearInterval(refInterval.current);
    active.current.disabled = false; 
    /*By setting active.current.disabled to false in the stopTimer function, 
    it ensures that the button is -re-enabled again after the timer is stopped. 
    Without this line of code, we cannot press Start to continue counting, it does not relate storing the current value
    */
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  /*clearInterval syntax itself is not directly related to useRef. 
  clearInterval is a built-in JavaScript function used to cancel or clear a previously set interval.  */

  return { time, startTimer, stopTimer, resetTimer, active };
  /*In this example, time, startTimer, stopTimer, resetTimer, 
  and active are accessed as properties of the object returned by the useTimer hook. 
  They cannot be directly called as functions
  */


};
export default useTimer;

//setInterval - khoang lap di lap lai (1000 la interval)
/*
In the provided code, variables like active, isStart, and refInterval 
are initialized using useRef. useRef creates an object with a .current property 
that can be used to store and access values.

For instance, const active = useRef(null); creates a useRef object assigned to active, 
and active.current is used to store or retrieve values.

So, when you encounter code like active.current.disabled = false; or isStart.current = false;, 
it means you are modifying or reading the value of .current on the useRef object.
*/
