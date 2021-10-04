export const hoursMinutes = (minutes: number) => {

    const hours = Math.floor(minutes / 60);
    const m = minutes % 60;

    return `${hours}h ${m}`;
}


export const formattedDecimal = (val: number): string => {
    if (val > -10 && val < 10)
        return `0${val}`;
    else
        return `${val}`;

}