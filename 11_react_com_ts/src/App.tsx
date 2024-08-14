import React from 'react';

// 4 - importação de componentes
import FirstComponents from './components/FirstComponents';


function App() {

  // 1 - variaveis
  const name: string = "Pablo";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - funções

  const userGreeting = (name: string): string =>{
    return ` Olá, ${name}`
  }

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
    </div>
  );
}

export default App;
