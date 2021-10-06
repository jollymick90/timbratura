import { useEffect, useState } from "react";
import { ClockTime, defaultTimeInit } from "../model/clock-time";

export interface ClockTimeViewP {
    allDay?: boolean;
    clockTime?: ClockTime;
}
const ClockTimeView = (props?: ClockTimeViewP) => {
    const [clockTimeStart] = useState(props?.clockTime || defaultTimeInit);

    useEffect(() => {
        console.log("input clockTimeStart", clockTimeStart)
    }, [clockTimeStart])

    return (
        <>
            <div>
                <p>
                    {clockTimeStart.hours}
                </p>
                <p>
                    {clockTimeStart.minutes}
                </p>
                <p>
                    {clockTimeStart.hoursMinutesLabel}
                </p>
            </div>
        </>
    )

}

export default ClockTimeView;