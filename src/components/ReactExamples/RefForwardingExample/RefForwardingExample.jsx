import React from "react"

    
export const RefForwardingExample = () => {
    const favoriteAnimalInput = React.useRef()
    const [favoriteAnimal, setFavoriteAnimal] = React.useState('')

    const favoriteColorInput = React.useRef()
    const [favoriteColor, setFavoriteColor] = React.useState('')

    const showFavoriteAnimal = () => {
        setFavoriteAnimal(favoriteAnimalInput.current.value)
    }
    const showFavoriteColor = () => {
        setFavoriteColor(favoriteColorInput.current.value)
    }
    return (
        <div>
            <h3>Ref Forwarding Example</h3>
            <div>
                Your Favorite animal is: {favoriteAnimal}
                <ChildWithRefAnimal forwardedRef={favoriteAnimalInput}/>
                <button onClick={showFavoriteAnimal}>Submit Fav Animal</button>
            </div>
            <div>
                Your Favorite color is: {favoriteColor}
                <ChildWithRefColor ref={favoriteColorInput}/>
                <button onClick={showFavoriteColor}>Submit Fav Color</button>
            </div>
        </div>
    )
}

const ChildWithRefAnimal = ({forwardedRef, ...props}) => {
    return (
        <div>
            <label>
                Favorite Animal:
                <input ref={forwardedRef} style={{marginLeft: '5px'}}/>
            </label>
        </div>
    )
}
const ChildWithRefColor = React.forwardRef((props, ref) => {
    return (
        <div>
            <label>
                Favorite Color:
                <input ref={ref} style={{marginLeft: '5px'}}/>
            </label>
        </div>
    )
})