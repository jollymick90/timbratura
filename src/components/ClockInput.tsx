import { useEffect, useState } from 'react';

import { ClockTime, defaultTimeInit } from '../model/clock-time';
import ClockHoursMinutesInput from './ClockHoursMinutesInput';
import ClockTimeView from './ClockTimeView';


const ClockInput = () => {
    const defaultStart: ClockTime = defaultTimeInit;
    const defaultEnd: ClockTime = defaultTimeInit;

    const [clockTimeStart, setClockTimeStart] = useState(defaultStart);
    const [clockTimeEnd, setClockTimeEnd] = useState(defaultEnd);
    
    useEffect(() => {
        try {
            console.log("clockTimeStart", clockTimeStart);
            console.log("clockTimeEnd", clockTimeEnd);    
        } catch (error) {
            console.log("useEffect",error)
        }
        
    }, [clockTimeStart, clockTimeEnd])
    
    return (
        <>
            <ClockHoursMinutesInput
                clockTime={clockTimeStart}
                handleClockTime={(clockTimeSetted) => setClockTimeStart(clockTimeSetted)} />

            <ClockHoursMinutesInput
                clockTime={clockTimeEnd}
                handleClockTime={(clockTimeSetted) => setClockTimeEnd(clockTimeSetted)} />

            
            {/* <ClockTimeView clockTime={clockTimeStart} ></ClockTimeView>

            <ClockTimeView clockTime={clockTimeEnd} ></ClockTimeView> */}
        </>
    )

}

export default ClockInput;