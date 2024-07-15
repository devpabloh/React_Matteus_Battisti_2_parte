/* import { useContext } from "react"
import { CounterContext } from "../context/CounterContext" */
import {useCounterContext} from "../hook/useCounterContext";

const About = () => {/* 
    const {counter} = useContext(CounterContext) */
    const {counter} = useCounterContext();
  return (
    <div>
        <h1>Aboult</h1>
        <p>valor do contador: {counter}</p>
        
    </div>
  )
}

export default About