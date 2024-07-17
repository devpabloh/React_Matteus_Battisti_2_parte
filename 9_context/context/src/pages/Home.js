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
    const {color, dispatch} = useTitleColorContext();

    // alterando state complexo
    const setTitleColor = (color)=>{
      dispatch({type: color})
    }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>valor do contador: {counter}</p>
        {/* 3 - alterando valor do contexto */}
        <ChangeCounter/>
        {/* 6 - alterando contexto complexo */}
        <div>
          <button onClick={()=> setTitleColor("RED")}>Vermelho</button>
          <button onClick={()=> setTitleColor("BLUE")}>Azul</button>
          <button onClick={()=> setTitleColor("BLACK")}>Preto</button>
        </div>
    </div>
  )
}

export default Home;