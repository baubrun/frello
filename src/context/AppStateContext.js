import {
    createContext, useReducer, useContext
} from "react"
import {appData} from "../data"
import { dataReducer } from "./dataReducer";



export const AppStateContext = createContext()

export const AppStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, appData)

    return (
        <AppStateContext.Provider value={{state, dispatch}}>
            {children}
        </AppStateContext.Provider>
    )
}


export const useAppState = () => {
    return useContext(AppStateContext)
}