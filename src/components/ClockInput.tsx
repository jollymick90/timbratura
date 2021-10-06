import { useEffect, useState } from 'react';
import { hoursMinutes } from '../core/time-print';
import { extractTimeWorkHM } from '../core/timer-utils';

import { ClockTime, defaultTimeInit } from '../model/clock-time';
import ClockHoursMinutesInput from './ClockHoursMinutesInput';
import ClockTimeView from './ClockTimeView';
import ClockLabel from './ClockLabel';

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
        <div className="container mx-auto p-4 border-2 flex flex-col">
                
                <ClockHoursMinutesInput
                    label="entrata:"
                    clockTime={clockTimeStart}
                    handleClockTime={(clockTimeSetted) => setClockTimeStart(clockTimeSetted)} />
                
                <ClockHoursMinutesInput
                    label="uscita:"
                    clockTime={clockTimeEnd}
                    handleClockTime={(clockTimeSetted) => setClockTimeEnd(clockTimeSetted)} />
                
                <ClockLabel>totale ore:</ClockLabel>
                <ClockTimeView clockTime={clockTimeDelta} ></ClockTimeView>
            </div>
        </>
    )

}

export default ClockInput;