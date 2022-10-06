import React, { useEffect } from "react"
import ReactDOM from 'react-dom';

export const PortalsExample = () => {
    return (
        <div>
            <h3>Portals Example</h3>
            <div id='outside-of-box'>
                <Box childOutsideOFBox={<div>Child outside of box</div>}>
                    <div>
                        Inside of box
                    </div>
                </Box>
            </div>
        </div>
    )
}

const Box = (props: any) => {
    const el = document.createElement('div');
    useEffect(() => {
        const outsideOfBox = document.getElementById('outside-of-box')
        outsideOfBox?.appendChild(el)
        return () => {
            outsideOfBox?.removeChild(el)
        }
    })
    return (
        <div style={{border: '1px solid black', width: '300px', height: '300px'}}>
            {props.children}
            {ReactDOM.createPortal(
                props.childOutsideOFBox,
                el
            )}
        </div>
    )
}