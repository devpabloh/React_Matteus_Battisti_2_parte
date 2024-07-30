import { useEffect, useState } from "react";

const HookUseEffect = () => {

    // 1 - useEffect, sem dependências [], ele executa sempre que o componente for renderizado.
    useEffect(()=>{
        console.log("Serei executado sempre que o componente renderizar")
    });

    const [number, setNumber] = useState(1);

    const changeSomething = ()=>{
        setNumber(number + 1);
    }
    // 2 - Arrey de deoendência vazio
    useEffect(()=>{
        console.log("Serei executado apenas uma vez, pois possuo dependência []")
    },[]);

    // 3 - Array de dependência com valor
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(()=>{
        console.log("Serei executado apenas quando o anotherNumber sofrer mudanças");
    }, [anotherNumber]);

    // 4 - cleanup do useEffect
    // é usado para limpar o uso de alguns hooks, porque alguns deles ficam renderizando o componente da página home por exemplo, mas a gente está na página sobre, isso pode quebrar a aplicação e causar erros, por isso usamos o clearnup. como foi mostrado a baixo.

    useEffect(()=>{
        /* const timer = setTimeout(()=>{
            console.log("Hello Word!");

            setAnotherNumber(anotherNumber + 1);
        }, 2000)

        return ()=> clearTimeout(timer); */
    }, [anotherNumber]);

  return (
    <div>
        <h2>Hook - useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect;