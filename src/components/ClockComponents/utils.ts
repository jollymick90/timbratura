import { formattedDecimal } from "../../core/time-print";

export function buildClockTime(hours: number, minutes: number) {
    return {
        hours: hours,
        minutes: minutes,
        hoursMinutesLabel: `${formattedDecimal(hours)}:${formattedDecimal(
          minutes
        )}`,
      };
}

