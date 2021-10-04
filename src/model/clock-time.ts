export interface ClockTime {
    hours: number,
    minutes: number,
    hoursMinutesLabel: string
}

export const defaultTimeInit: ClockTime = { minutes: 0, hours: 0, hoursMinutesLabel: "00:00" };