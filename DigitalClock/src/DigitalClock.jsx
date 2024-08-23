import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); //seconds count down speed
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    // Get the Hour value
    let hours = time.getHours(); 
    // Get the Minutes value
    const minutes = time.getMinutes(); 
    // Get the seconds value
    const seconds = time.getSeconds(); 
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    // Create template strings
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  // check the seconds number is less than 10 and adding zero before the number
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <spna>{formatTime()}</spna>
      </div>
    </div>
  );
}

export default DigitalClock;
