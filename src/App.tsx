
import React from 'react';

import './App.css';
import { hoursMinutes } from './core/time-print';
import { extractTimeWorkHM } from './core/timer-utils';
import ClockInput from './components/ClockInput'

function App() {
  let result = "0"
  let mStart = 0;
  let hStart = 0;
  let mEnd = 0;
  let hEnd = 0;

  function testCalc() {
    console.log("test");
    console.log(hoursMinutes(extractTimeWorkHM(8,45,13,23)));
    // console.log(hoursMinutes(extractTimeWorkHM(13,8,13,47)));
    console.log(hoursMinutes(extractTimeWorkHM(14,0,17,16)));
  }

  testCalc();

  return (
    

    <div className="App h-full">

      <ClockInput></ClockInput>

    </div>
  );
}



// export default App;
export default App;