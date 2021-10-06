import { ClockTime } from "../model/clock-time";

export const hoursMinutes = (minutes: number): ClockTime => {

    const hours = Math.floor(minutes / 60);
    const m = minutes % 60;

    return {
        hours: hours,
        minutes: m,
        hoursMinutesLabel: `${hours}:${m}`
    };
}


export const formattedDecimal = (val: number): string => {
    if (val > -10 && val < 10)
        return `0${val}`;
    else
        return `${val}`;

}