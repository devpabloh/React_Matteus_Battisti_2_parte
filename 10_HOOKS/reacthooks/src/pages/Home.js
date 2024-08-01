import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookuseRef from "../components/HookuseRef";
import HookUseCallBack from "../components/HookUseCallBack";
import { someContext } from "../components/HookUseContext";
import HookUseMemo from "../components/HookUseMemo";

//useContext
import { useContext } from "react";




const Home = () => {
  const {contextValue} = useContext(someContext);


  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>valor do contexto: {contextValue}</p>
        <hr />
        <HookuseRef/>
        <HookUseCallBack/>
        <HookUseMemo/>
    </div>
  )
}

export default Home