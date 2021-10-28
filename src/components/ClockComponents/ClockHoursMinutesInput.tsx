import { useEffect, useState } from "react";
// import { formattedDecimal } from "../../core/time-print";

import { ClockTime } from "../../model/clock-time";
import { buildClockTime } from "./utils";
enum ClockFieldSet {
  MINUTES,
  HOURS,
}
export interface ClockHoursMinutesInputP {
  allDay?: boolean;
  clockTime?: ClockTime;
  label?: string;
  handleClockTime?: (clockTimeSetted: ClockTime) => void;
}
const ClockHoursMinutesInput = (props: ClockHoursMinutesInputP) => {
  
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const { allDay, label, handleClockTime } = props

  const hDay = allDay === true ? true : false;
  const formatHours = hDay ? 12 : 24;
  
  useEffect(() => {
    if (handleClockTime) {
      const c = buildClockTime(hours, minutes)
      handleClockTime(c);
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },  [hours, minutes]);

  const setDefaultValue = (type: ClockFieldSet) => {
    switch (type) {
      case ClockFieldSet.HOURS:
        setHours(0);
        break;

      case ClockFieldSet.MINUTES:
        setMinutes(0);
        break;

      default:
        break;
    }
  };



  const setHoursMinutes = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: ClockFieldSet
  ) => {
    try {
      const valueRead = event.target.value;
      const value = parseInt(valueRead);
      if (!isNaN(value)) {
        switch (type) {
          case ClockFieldSet.HOURS:
            setHours(value % formatHours);
            break;

          case ClockFieldSet.MINUTES:
            setMinutes(value % 60);
            break;

          default:
            break;
        }
      } else {
        setDefaultValue(type);
      }
    } catch (error) {
      console.log(error);
      setDefaultValue(type);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <label>{label}</label>
        <div className="flex flex-row">
          <div className="flex flex-col m-4">
            <input
              className="
              border-4
              border-green-200
              hover:border-green-200
              hover:bg-white hover:text-green-500
              hover:font-bold
              focus:shadow-outline
              focus:outline-none
              focus:border-green-200
              focus:bg-white focus:text-green-500
              focus:font-bold
             bg-green-200 text-center w-12"
              type="number"
              value={hours}
              step="1"
              onChange={(event) => setHoursMinutes(event, ClockFieldSet.HOURS)}
            />
            <span className="text-sm text-green-500">hours</span>
          </div>
          <span className="m-4">:</span>
          <div className="flex flex-col m-4">
            <input
              className=" border-4
              border-green-200
              hover:border-green-200
              hover:bg-white hover:text-green-500
              hover:font-bold
              focus:shadow-outline
              focus:outline-none
              focus:border-green-200
              focus:bg-white focus:text-green-500
              focus:font-bold
             bg-green-200 text-center w-12"
              type="number"
              value={minutes}
              step="1"
              onChange={(event) =>
                setHoursMinutes(event, ClockFieldSet.MINUTES)
              }
            />
            <span className="text-sm text-green-500">minutes</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockHoursMinutesInput;
