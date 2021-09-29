const step = 15;

export const extractTimeWork = (dateStart: Date, dateEnd: Date) => {

    if (isNotSameDay(dateStart, dateEnd)) {
        const qdaStart = extractQda(dateStart);
        const qdaEnd = extractQda(dateEnd);
        const qdatimeWork =  qdaEnd - qdaStart;
        return qdatimeWork * step;
    }

    return 0;

}

function isNotSameDay(dateStart: Date, dateEnd: Date) {
    return  dateEnd.getFullYear() == dateStart.getFullYear() &&
    dateEnd.getMonth() == dateStart.getMonth() &&
    dateEnd.getDate() == dateStart.getDate();
} 

function isSameDay(dateStart: Date, dateEnd: Date): boolean {
    return dateEnd.getFullYear() == dateStart.getFullYear() &&
    dateEnd.getMonth() == dateStart.getMonth() &&
    dateEnd.getDate() == dateStart.getDate();
}
function extractQda(dateStart: Date) {
    const minutes = dateStart.getMinutes();
    let qda = Math.round(minutes / step);
    let qdaRest = minutes % step;
    if (qdaRest > 0)
        qda += 1;

    const hours = dateStart.getHours();
    qda = qda + hours * (60 / step);
    return qda;

}

