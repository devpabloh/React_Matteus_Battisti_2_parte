/* import { useContext } from "react"
import { CounterContext } from "../context/CounterContext" */
import {useCounterContext} from "../hook/useCounterContext";
import { useTitleColorContext } from "../hook/useTitleColorContext";

const About = () => {/* 
    const {counter} = useContext(CounterContext) */
    const {counter} = useCounterContext();

    const {color} = useTitleColorContext();
  return (
    <div>
        <h1 style={{color:color}}>Aboult</h1>
        <p>valor do contador: {counter}</p>
        
    </div>
  )
}

export default About