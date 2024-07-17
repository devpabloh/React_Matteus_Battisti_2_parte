import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReduce = (state, action) => {
    //switch
}

export const TitleColorContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(titleColorReduce, {color: 'purple'})

    return <TitleColorContext.Provider>
                {children}
            </TitleColorContext.Provider>
}