
import React from 'react';

import './App.css';
import { hoursMinutes } from './core/time-print';
import { extractTimeWorkHM } from './core/timer-utils';

function App() {
  let result = "0"
  let mStart = 0;
  let hStart = 0;
  let mEnd = 0;
  let hEnd = 0;

  function testCalc() {
    console.log("test");
    console.log(hoursMinutes(extractTimeWorkHM(8,21,13,8)));
    console.log(hoursMinutes(extractTimeWorkHM(13,8,14,5)));
    console.log(hoursMinutes(extractTimeWorkHM(14,5,18,6)));
  }

  testCalc();

  return (
    

    <div className="App h-full">

      Hello guys
     
        <div>
          {result}
        </div>
    </div>
  );
}



// export default App;
export default App;