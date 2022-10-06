import React, {useContext} from 'react'

export const userContextDefaultValue = {
    firstName: '',
    lastName: '',
    email: '',
    favoriteColor: ''
}
function userReducer(state: any, action: any) {
    switch(action.type) {
        case 'UPDATE_FIRSTNAME':
            return {...state, firstName: action.value}
        case 'UPDATE_LASTNAME': 
            return {...state, lastName: action.value}
        case 'UPDATE_EMAIL': 
            return {...state, email: action.value}
        default:
            return state
    }
}

const UserContext = React.createContext({...userContextDefaultValue, dispatch: (action: {type: string, value:string}) => {}});

export const UserProvider = (props: any) => {
    const [userState, userDispatch] = React.useReducer(userReducer, userContextDefaultValue);
    return (
        <UserContext.Provider value={{...userState, dispatch: userDispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const UseContextExample = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h3>useContext Example</h3>
            <div>
                First Name: {user.firstName}
            </div>
            <div>
                Last Name: {user.lastName}
            </div> <div>
                Email: {user.email}
            </div>
        </div>    
    )
}

export class UseContextExampleForm extends React.Component {
    render() {
        const user: any = this.context
        return (
            <div>
                <label>
                    First Name: 
                    <input onChange={(event) => {user.dispatch({type: 'UPDATE_FIRSTNAME', value: event.target.value})}}/>
                </label>
                <label>
                    Last Name: 
                    <input onChange={(event) => {user.dispatch({type: 'UPDATE_LASTNAME', value: event.target.value})}}/>
                </label>
                <label>
                    Email: 
                    <input onChange={(event) => {user.dispatch({type: 'UPDATE_EMAIL', value: event.target.value})}}/>
                </label>
            </div>    
        )
    }
}
UseContextExampleForm.contextType = UserContext;