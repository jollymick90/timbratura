import { ClockTime } from "../model/clock-time";

const step = 15;
const debugEnabled = false;
const offsetAdjust = 1;

export interface TimerWorkSettings {
    inlcudeBreakTime: boolean;
    breakTime?: ClockTime;
}

export const extractTimeWorkHM = (clockTimeStart: ClockTime, clockTimeEnd: ClockTime, settings: TimerWorkSettings) => {
    const startDate = new Date();
    startDate.setMilliseconds(0);
    startDate.setSeconds(0);
    startDate.setHours(clockTimeStart.hours);
    startDate.setMinutes(clockTimeStart.minutes);

    const endDate = new Date();
    endDate.setMilliseconds(0);
    endDate.setSeconds(0);
    endDate.setHours(clockTimeEnd.hours);
    endDate.setMinutes(clockTimeEnd.minutes);

    return extractTimeWork(startDate, endDate, settings);
}

export const extractTimeWork = (dateStart: Date, dateEnd: Date, settings: TimerWorkSettings) => {

    if (isSameDay(dateStart, dateEnd)) {
        
        const qdaStart = extractQda(dateStart);
        const qdaEnd = extractQda(dateEnd);

        const qdatimeWork = qdaEnd - qdaStart;
        const qdaBreakTime = extractBreakTime(settings); 
       
        const qaDelta = qdatimeWork > 0 ? (qdatimeWork - offsetAdjust - qdaBreakTime) * step : 0;
        
        return qaDelta;
    }

    return 0;

}

function isSameDay(dateStart: Date, dateEnd: Date): boolean {
    return dateEnd.getFullYear() === dateStart.getFullYear() &&
    dateEnd.getMonth() === dateStart.getMonth() &&
    dateEnd.getDate() === dateStart.getDate();
}
function extractQda(dateStart: Date) {
    const minutes = dateStart.getMinutes();
    const hours = dateStart.getHours();
    const debug = debugEnabled && (minutes !== 0 || hours !== 0);

    const hoursStep = (60 / step);
    const qdaH = hours * hoursStep;

    let qdaM = Math.floor(minutes / step);
    if (debug) {
        console.log('#####');
        console.log(`Input ${hours}:${minutes}`);
    }
    
    const qdaRest = minutes % step;
    
    if (qdaRest > 0) {
        const qdaPre = qdaM;
        // qdaM += 1;
        if (debug) {
            console.log(`QDA Minutes Adjusted qdapre:${qdaPre}; qdaM:${qdaM}; qdaRest:${qdaRest}`);
        }
    }

    const qdaTot = qdaM + qdaH;
    
    if (debug) {
        console.log( `QDA hours: ${qdaH}; QDA minutes: ${qdaM}, hoursStep: ${hoursStep}`);
        console.log('#####');
    }

    return qdaTot;

}

function extractBreakTime(settings: TimerWorkSettings) {
    // if (settings.inlcudeBreakTime && settings.breakTime) {
    //     const breakTime = new Date();
    //     breakTime.setMilliseconds(0);
    //     breakTime.setSeconds(0);
    //     breakTime.setHours(settings.breakTime.hours);
    //     breakTime.setMinutes(settings.breakTime.minutes);
    //     qdaBreakTime = extractQda(breakTime);
    // }
    if (settings.inlcudeBreakTime)
        return 4;
    else
        return 0;
}

