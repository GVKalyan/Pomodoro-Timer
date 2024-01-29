import React, { useState, useEffect } from 'react';
import './App.css'

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [Active, setActive] = useState(false);

  useEffect(() => {
    let interval;

    if (Active) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setActive(false);
          } else {
            setMinutes((prevMin) => prevMin - 1);
            
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () =>clearInterval(interval);
  }, [Active, minutes, seconds]);

  const toggleTimer = () => {
    setActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setActive(false);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className='mt-5'>
      <h1 className="text-center">Pomodoro Timer</h1>
      <div className= "d-flex justify-content-center mt-5" >
        <p className='fs-1'>
          {(minutes)}:{(seconds)}
        </p>
      </div>
      <div className= "d-flex justify-content-center mt-2">
        <button onClick={toggleTimer} className='me-3 btn btn-light'>{Active ? 'Pause' : 'Start'}</button>
        
        <button onClick={resetTimer} className='ms-3 btn btn-light'>Reset</button>
      </div>
               <h4 className="text-center mt-5">Give the  required Inputs for</h4>
               <h4 className="text-center mt-5">Pomodoro Timer</h4>
              <div className= "d-flex justify-content-center mt-5">
                 <input type="number" placeholder="Minutes" className={'wdth rounded-3'} onChange={(e)=>{setMinutes(e.target.value)}} />
                 <input type="number" placeholder="Secounds" className={'wdth rounded-3'} onChange={(e)=>{setSeconds(e.target.value)}} />
              </div>

    </div>
    
  );
};

export default PomodoroTimer;
