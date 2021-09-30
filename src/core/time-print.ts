export const hoursMinutes = (minutes: number) => {

    const hours = Math.floor(minutes / 60);
    const m = minutes % 60;

    return `${hours}h ${m}`;
}