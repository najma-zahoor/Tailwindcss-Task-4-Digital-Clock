import React, { useState, useEffect } from "react";
import "./App.css";
const formatTime = (num) => (num < 10 ? "0" + num : num); 
const App = () => {  
  const [time, setTime] = useState(new Date()); 
  const updateTime = () => { 
    setTime(new Date());
  };

  useEffect(() => {  
    const timer = setInterval(updateTime, 1000); 
    return () => clearInterval(timer); 
  }, []);

  const hours = formatTime(time.getHours());  
  const minutes = formatTime(time.getMinutes());  
  const seconds = formatTime(time.getSeconds()); 

  return ( 
    <div className="container">
      <div className="clock-card">
        <h1 className="title">Digital Clock</h1>

        <div className="time">  
          {hours}:{minutes}:{seconds}
        </div>

        <p className="ampm">  
          {time.getHours() >= 12 ? "PM" : "AM"}
        </p>
      </div>
    </div>
  );
};

export default App;