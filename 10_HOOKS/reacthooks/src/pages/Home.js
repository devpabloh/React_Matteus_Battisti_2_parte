import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import HookuseRef from "../components/HookuseRef";
import HookUseCallBack from "../components/HookUseCallBack";
import HookUseMemo from "../components/HookUseMemo";
import HookLayoutEffect from "../components/HookLayoutEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookCustom from "../components/HookCustom";

//useContext
import { useContext } from "react";
import { someContext } from "../components/HookUseContext";






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
        <HookLayoutEffect/>
        <HookUseImperativeHandle/>
        <HookCustom/>
    </div>
  )
}

export default Home