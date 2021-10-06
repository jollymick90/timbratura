import { useEffect, useState } from 'react';
import { hoursMinutes } from '../core/time-print';
import { extractTimeWorkHM } from '../core/timer-utils';

import { ClockTime, defaultTimeInit } from '../model/clock-time';
import ClockHoursMinutesInput from './ClockHoursMinutesInput';
import ClockTimeView from './ClockTimeView';


const ClockInput = () => {
    const defaultStart: ClockTime = defaultTimeInit;
    const defaultEnd: ClockTime = defaultTimeInit;
    const defaultDelta: ClockTime = defaultTimeInit;

    const [clockTimeStart, setClockTimeStart] = useState(defaultStart);
    const [clockTimeEnd, setClockTimeEnd] = useState(defaultEnd);
    const [clockTimeDelta, setClockTimeDelta] = useState(defaultDelta);
    
    useEffect(() => {

        setClockTimeDelta(hoursMinutes(extractTimeWorkHM(clockTimeStart,clockTimeEnd)));
        
    }, [clockTimeStart, clockTimeEnd])
    
    return (
        <>
            <ClockHoursMinutesInput
                clockTime={clockTimeStart}
                handleClockTime={(clockTimeSetted) => setClockTimeStart(clockTimeSetted)} />

            <ClockHoursMinutesInput
                clockTime={clockTimeEnd}
                handleClockTime={(clockTimeSetted) => setClockTimeEnd(clockTimeSetted)} />

            
            <ClockTimeView clockTime={clockTimeStart} ></ClockTimeView>

            <ClockTimeView clockTime={clockTimeEnd} ></ClockTimeView>

            <ClockTimeView clockTime={clockTimeDelta} ></ClockTimeView>
        </>
    )

}

export default ClockInput;