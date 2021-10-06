import { useEffect, useState } from "react";
import { ClockTime, defaultTimeInit } from "../model/clock-time";

export interface ClockTimeViewP {
    allDay?: boolean;
    clockTime?: ClockTime;
}
const ClockTimeView = (props?: ClockTimeViewP) => {
    // const [clockTimeStart] = useState(props?.clockTime || defaultTimeInit);

    // useEffect(() => {
    //     console.log("input clockTimeStart", clockTimeStart)
    // }, [clockTimeStart])

    const sanitizedValue = () => {
        return props?.clockTime?.hoursMinutesLabel || '00'
    }

    return (
        <>
            <div>
                <p>
                    {sanitizedValue()}
                </p>
            </div>
        </>
    )

}

export default ClockTimeView;