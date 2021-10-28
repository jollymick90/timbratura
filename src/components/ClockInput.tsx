import { useEffect, useState } from 'react';
import { hoursMinutes } from '../core/time-print';
import { extractTimeWorkHM } from '../core/timer-utils';

import { ClockTime, defaultTimeInit } from '../model/clock-time';
import ClockHoursMinutesInput from './ClockComponents/ClockHoursMinutesInput';
import ClockTimeView from './ClockTimeView';
import ClockLabel from './ClockLabel';
import Switch from './WebComponents/Switch';

const ClockInput = () => {
    const defaultStart: ClockTime = defaultTimeInit;
    const defaultEnd: ClockTime = defaultTimeInit;
    const defaultDelta: ClockTime = defaultTimeInit;

    const [clockTimeStart, setClockTimeStart] = useState(defaultStart);
    const [clockTimeEnd, setClockTimeEnd] = useState(defaultEnd);
    const [clockTimeDelta, setClockTimeDelta] = useState(defaultDelta);

    const [breakLaunchInclude, setBreakLaunchInclude] = useState(false);
    
    useEffect(() => {
        const t = hoursMinutes(extractTimeWorkHM(
            clockTimeStart, 
            clockTimeEnd, 
            {
                inlcudeBreakTime: breakLaunchInclude,
                
            }
        ))
        setClockTimeDelta(t);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clockTimeStart, clockTimeEnd, breakLaunchInclude])
    
    return (
        <>
            <div className="container mx-auto p-4 border-2 flex flex-col">
                
                <h2>parametri di ingresso</h2>

                <div className="group">
                    <label>Inlcudi 1h di pausa pranzo</label>                
                    <Switch value={breakLaunchInclude} hasChanged={(checked: boolean)=> {setBreakLaunchInclude(checked)}}></Switch>
                </div>
            </div>
            <div className="container mx-auto p-4 border-2 flex flex-col">
                
                <ClockHoursMinutesInput
                    label="entrata:"
                    clockTime={clockTimeStart}
                    handleClockTime={(clockTimeSetted) => setClockTimeStart(clockTimeSetted)} />
                
                <ClockHoursMinutesInput
                    label="uscita:"
                    clockTime={clockTimeEnd}
                    handleClockTime={(clockTimeSetted) => setClockTimeEnd(clockTimeSetted)} />
                            
                <ClockLabel>totale ore:</ClockLabel>
                
                <ClockTimeView clockTime={clockTimeDelta} ></ClockTimeView>
            </div>
        </>
    )

}

export default ClockInput;