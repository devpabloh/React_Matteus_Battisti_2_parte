import {useState, useEffect, useMemo} from "react";

const HookUseMemo = () => {
    const [ number, setNumber] = useState(0);

    const [premiumNumbers] = [ "0", "100", "200"];

    useEffect(()=>{
        console.log("Premium Numbers foi alterado!")
    }, [premiumNumbers])

  return (
    <div>
        <h2>HookUseMemo</h2>
        <input type="text" onChange={(e)=>(e.target.value)} />
        <hr/>
    </div>
  )
}

export default HookUseMemo;