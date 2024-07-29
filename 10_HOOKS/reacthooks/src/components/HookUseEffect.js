import { useEffect, useState } from "react";

const HookUseEffect = () => {

    // 1 - useEffect, sem dependências [], ele executa sempre que o componente for renderizado.
    useEffect(()=>{
        console.log("Serei executado sempre que o componente renderizar")
    });

    const [number, setNumber] = useState(1);

    const changeSomething = ()=>{
        setNumber(number + 1)
    }

    useEffect(()=>{
        console.log("Serei executado apenas uma vez, pois possuo dependência []")
    },[])

  return (
    <div>
        <h2>Hook - useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <hr />
    </div>
  )
}

export default HookUseEffect;