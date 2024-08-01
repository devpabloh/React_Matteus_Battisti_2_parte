import {useLayoutEffect, useState, useEffect} from 'react'

// layoutEffect sempre vai ser executado antes de qualquer outra linha de código independente de onde ele tenha sido colocado

const HookLayoutEffect = () => {

    const [name, setName] = useState("Algum nome")

    useEffect(()=>{

        setName("Mudou de nome!")

    },[]);

    useLayoutEffect(()=>{
        console.log("1")
        setName("Outro nome")
    }, [])

    console.log(name)

  return (
    <div>
        <h2>HookLayoutEffect</h2>
        <p>Nome: {name}</p>
        <hr />
    </div>
  )
}

export default HookLayoutEffect