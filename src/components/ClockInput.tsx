import { useState } from 'react';

import { ClockTime, defaultTimeInit } from '../model/clock-time';
import ClockHoursMinutesInput from './ClockHoursMinutesInput';

const ClockInput = () => {
    const defaultV: ClockTime = defaultTimeInit;
    const [clockTime, setClockTime] = useState(defaultV);
    
    return (
        <>
            <ClockHoursMinutesInput
                clockTime={clockTime}
                handleClockTime={(clockTimeSetted) => setClockTime(clockTimeSetted)} />

            <div>
                <p>
                    {clockTime.hours}
                </p>
                <p>
                    {clockTime.minutes}
                </p>
                <p>
                    {clockTime.hoursMinutesLabel}
                </p>
            </div>
        </>
    )

}

export default ClockInput;