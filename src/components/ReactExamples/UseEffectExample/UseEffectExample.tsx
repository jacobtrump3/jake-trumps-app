import {useEffect, useState} from 'react'

export const UseEffectExample = () => {
    const [time, setTime] = useState(0)
    useEffect(() => {
        const timeIncrementer = setTimeout(() => {
            setTime(time + 1)
        }, 1000)
        return () => {
            clearTimeout(timeIncrementer)
        }
    }, [time])
    return(
        <div>
            <h3>useEffect Example</h3>
            <div>
                <button type="button" onClick={() => {setTime(time - 1)}}>-</button>
                    <span style={{margin: '0 10px 0 10px'}}>{time}</span>
                <button type="button" onClick={() => {setTime(time + 1)}}>+</button>
                <button onClick={() => {setTime(0)}}>reset</button>
            </div>
        </div>
    )
}
