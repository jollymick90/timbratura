import { useState } from 'react';
import { hoursMinutes } from '../core/time-print';
import { extractTimeWorkHM } from '../core/timer-utils';

const TimeWorkInputHM = () => {

    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());


    return (
        <>
            <label>
                Hours:
                <input
                    type="numeric"
                    value={hours}
                    onChange={e => setHours(parseInt(e.target.value))}
                />
            </label>
            <label>
                Minutes:
                <input
                    type="numeric"
                    value={minutes}
                    onChange={e => setMinutes(parseInt(e.target.value))}
                />
            </label>

        </>
    )

}

export default TimeWorkInputHM;