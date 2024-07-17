/* import { useContext } from "react" */

/* import { CounterContext } from "../context/CounterContext" */
import ChangeCounter from "../components/ChangeCounter";

/* 4 - fatorando código com hook */
import {useCounterContext} from "../hook/useCounterContext"

/* 5 - Contexto mais complexo */
import { useTitleColorContext } from "../hook/useTitleColorContext";

const Home = () => {
    /* const {counter} = useContext(CounterContext); */
    const {counter} = useCounterContext();

    /* 5 - contexto mais complexo */
    

  return (
    <div>
        <h1>Home</h1>
        <p>valor do contador: {counter}</p>
        {/* 3 - alterando valor do contexto */}
        <ChangeCounter/>
    </div>
  )
}

export default Home;