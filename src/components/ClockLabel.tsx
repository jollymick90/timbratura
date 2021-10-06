export interface ClockLabelP {
    value?: string;
    children: React.ReactNode | undefined
}
const ClockLabel = (props: ClockLabelP) => {

    return (
        <>
            <div>                
                {props.children}
            </div>
        </>
    )

}

export default ClockLabel;