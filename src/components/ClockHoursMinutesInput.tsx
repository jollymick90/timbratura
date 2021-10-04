import { useEffect, useState } from 'react';
import { formattedDecimal } from '../core/time-print';

import { ClockTime } from '../model/clock-time';
enum ClockFieldSet {
    MINUTES,
    HOURS
}
export interface ClockHoursMinutesInputP {
    allDay?: boolean;
    clockTime?: ClockTime;
    handleClockTime?: (clockTimeSetted: ClockTime) => void
}
const ClockHoursMinutesInput = (props?: ClockHoursMinutesInputP) => {

    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const hDay = props && props.allDay === true ? true : false;
    const formatHours = hDay ? 12 : 24;
    // useEffect(() => {
    //     // action on update of movies
    // }, [movies]);
    useEffect(() => {
        updatePropsTime();
    }, [hours, minutes])

    const updatePropsTime = () => {
        if (props && props.handleClockTime) {
            console.log(hours, minutes)
            const clockTime = {
                hours: hours,
                minutes: minutes,
                hoursMinutesLabel: `${formattedDecimal(hours)}:${formattedDecimal(minutes)}`
            }

            props.handleClockTime(clockTime);

        }
    }

    const setHoursMinutes = (value: number, type: ClockFieldSet) => {
        switch (type) {
            case ClockFieldSet.HOURS:
                console.log("onChange", value, value % formatHours)

                setHours(value % formatHours);
                break;

            case ClockFieldSet.MINUTES:
                console.log("onChange", value, value % 60)

                setMinutes(value % 60);
                break;

            default:
                break;
        }
    }

    return (
        <>
            <label>
                Hours:
                <input
                    type="numeric"
                    value={hours}
                    onChange={e => setHoursMinutes(parseInt(e.target.value), ClockFieldSet.HOURS)}

                    // onKeyUp={e => setHoursMinutes(parseInt(e.code), ClockFieldSet.HOURS)}
                />
            </label>
            <label>
                Minutes:
                <input
                    type="numeric"
                    value={minutes}
                    onChange={e => setHoursMinutes(parseInt(e.target.value), ClockFieldSet.MINUTES)}
                    // onKeyUp={e => setHoursMinutes(parseInt(e.code), ClockFieldSet.MINUTES)}
                />
            </label>
        </>
    )

}

export default ClockHoursMinutesInput;