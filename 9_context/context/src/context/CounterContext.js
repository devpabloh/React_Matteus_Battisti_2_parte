// 1 - criar contexto

import { createContext, useState } from "react";

export const CounterContext = createContext(5)

// 2 - criar provider

export const CounterContextProvider = ({Children}) => {
    const [counter, setCounter] = useState()

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {Children}
        </CounterContext.Provider>
    )
}

