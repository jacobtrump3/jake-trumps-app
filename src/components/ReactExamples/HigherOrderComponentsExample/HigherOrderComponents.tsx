import { useEffect, useState } from "react"

export const HigherOrderComponents = () => {
    return (
        <div>
            <h3>Higher Order Components Example</h3>
            {useLoaded(ChildToHOC)}
        </div>
    )
}
const useLoaded = (WrappedComponent: any) => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoaded(!loaded)
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    })
    return (
        <WrappedComponent isLoaded={loaded}/>
    )
}
const ChildToHOC = ({isLoaded}: {isLoaded: boolean}) => {
    return (
        <>
        {isLoaded ? 
            <div>
                Content of child component!
            </div>
            :
            <div>
                Loading ...
            </div>
        }
        </>
    )
}