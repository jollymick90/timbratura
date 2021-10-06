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

    useEffect(() => {
        updatePropsTime();
    }, [hours, minutes])


    const setDefaultValue = (type: ClockFieldSet) => {
        switch (type) {
            case ClockFieldSet.HOURS:
                setHours(0);
                break;

            case ClockFieldSet.MINUTES:
                setMinutes(0);
                break;

            default:
                break;
        }
    }

    const updatePropsTime = () => {
        if (props && props.handleClockTime) {
            const clockTime = {
                hours: hours,
                minutes: minutes,
                hoursMinutesLabel: `${formattedDecimal(hours)}:${formattedDecimal(minutes)}`
            }

            props.handleClockTime(clockTime);

        }
    }

    const setHoursMinutes = (event: React.ChangeEvent<HTMLInputElement>, type: ClockFieldSet) => {
        try {
            const valueRead = event.target.value;
            const value = parseInt(valueRead)
            if (!isNaN(value)) {
                console.log(value)
                switch (type) {
                    case ClockFieldSet.HOURS:
                        setHours(value % formatHours);
                        break;

                    case ClockFieldSet.MINUTES:
                        setMinutes(value % 60);
                        break;

                    default:
                        break;
                }
            } else {
                setDefaultValue(type);
            }

        } catch (error) {
            console.log(error);
            setDefaultValue(type);
        }

    }

    return (
        <>
            <label>
                <input
                    className="border-2 text-center w-12"
                    type="numeric"
                    value={hours}
                    onChange={event => setHoursMinutes(event, ClockFieldSet.HOURS)}
                />
            </label>
            <label>
                <input
                    className="border-2 text-center w-12"
                    type="numeric"
                    value={minutes}
                    onChange={event => setHoursMinutes(event, ClockFieldSet.MINUTES)}
                />
            </label>
        </>
    )

}

export default ClockHoursMinutesInput;
