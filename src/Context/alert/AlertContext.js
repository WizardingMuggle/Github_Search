import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext()


export const AlertProvider = ({children})=>
{
    const initialstate = null;

    const[state , dispatch ] = useReducer(AlertReducer,initialstate)

    const setAlert = (msg , type)=>
    {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg,type}
        })
    }

    setTimeout(() => dispatch({type: 'REMOVE_ALERT'}) ,3000)

    //state ko context ka part banaya as alert
    return <AlertContext.Provider value={{setAlert, alert: state}}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext