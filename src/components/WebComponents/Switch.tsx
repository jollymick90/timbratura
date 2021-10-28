import './switch.css';

export interface SwitchP {
    value: boolean;
    hasChanged: (value: boolean) => void;
}
const Switch = (props: SwitchP) => {

    return (
        <>
            <label className="switch">
                <input type="checkbox"
                    onChange={(event) => props.hasChanged(event.target.checked)}
                 />
                <span className="slider"></span>
            </label>
        </>
    )

}

export default Switch;