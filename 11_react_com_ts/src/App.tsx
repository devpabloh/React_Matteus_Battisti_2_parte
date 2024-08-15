import React from 'react';

// 4 - importação de componentes
import FirstComponents from './components/FirstComponents';

// 5 - Desestruturando Props
import SecondComponents from './components/SecondComponents';
import Desctructuring, {Category} from './components/Desctructuring';

// 6 - useState
import State from './components/State';

// 8 - type
type textOrNull = string | null;


function App() {

  // 1 - variaveis
  const name: string = "Pablo";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções

  const userGreeting = (name: string): string =>{
    return ` Olá, ${name}`
  }

  // 8 - type
  const myText:textOrNull = "tem um texto aqui"
  let mySecontText:textOrNull = null

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Age: {age}</p>
      {isWorking && (
        <div> 
          <p>Está trabalhando...</p>  
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponents/>
      <SecondComponents name='segundo'/>
      <Desctructuring title = "primeiro post" content = "algum conteúdo" comentsQty={10} tags={["ts", "js"]} category={Category.ts}/>
      <State/>
      {myText && <p>Tem texto na variável</p>}
      {mySecontText && <p>Tem texto na variável</p>}
      
    </div>
  );
}

export default App;
