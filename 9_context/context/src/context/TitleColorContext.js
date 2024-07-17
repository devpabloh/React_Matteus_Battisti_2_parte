import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReduce = (state, action) => {
    switch (action.type){
        case "RED": 
            return {...state, color: "red"};

        case "BLUE": 
            return {...state, color: "blue"};
        case "BLACK":
            return {...state, color: "black"}
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(titleColorReduce, {color: 'purple'});

    console.log("Title color context:", state);

    return <TitleColorContext.Provider value={{...state, dispatch}}>
                {children}
            </TitleColorContext.Provider>
}