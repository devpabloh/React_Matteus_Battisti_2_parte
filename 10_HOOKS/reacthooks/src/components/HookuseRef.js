import { useEffect, useState, useRef } from "react"

const HookuseRef = () => {
    // 1 - useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(()=>{
        numberRef.current = numberRef.current + 1;
    });

    // 2 - useRef e DOM 
    const inputRef = useRef()
    const [text, setText] = useState("")


  return (
    <div>
        <h2>UseRef</h2>
        {/* 1 - useRef */}
        <p>O componente renderizou: {numberRef.current} vezes</p>
        <p>Counter 1: {counter}</p>
        <button onClick={()=> setCounter(counter + 1)}>Contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={()=> setCounterB(counterB +1 )}>Contador B</button>
        {/* 2 - useRef e DOM */}
        <form>
            <input type="text" ref={inputRef} />
            <input type="submit" value="Enviar" />
        </form>
        <hr />
    </div>
  )
}

export default HookuseRef