import React, {useState} from "react"

export const UseStateExample = () => {
    const [backgroundColor, setBackgroundColor] = useState('white')
    const boxStyle = {
        width: '200px',
        height: '200px',
        border: '2px solid black',
        margin: '0 0 10px 45px'
    }
    return (
        <div>
            <h3>useState Example</h3>
            <div className="color-box" style={{backgroundColor, ...boxStyle}}></div>
            <label>
                Set background color:
                <input onChange={(event) => {setBackgroundColor(event.target.value)}} value={backgroundColor} style={{marginLeft: '5px'}}></input>
            </label>
        </div>
    )
}