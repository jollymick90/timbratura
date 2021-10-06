import { useEffect, useState } from "react";
import { ClockTime, defaultTimeInit } from "../model/clock-time";

export interface ClockTimeViewP {
    allDay?: boolean;
    clockTime?: ClockTime;
}
const ClockTimeView = (props?: ClockTimeViewP) => {

    const sanitizedValue = () => {
        return props?.clockTime?.hoursMinutesLabel || '00:00'
    }

    return (
        <>
            <span>                
                {sanitizedValue()}
            </span>
        </>
    )

}

export default ClockTimeView;