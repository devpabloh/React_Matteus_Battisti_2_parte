// 1 - var, let e const

var x = 10
var y = 15

if (y > 10){
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10;
let b = 15;

if(b > 10){
    let a = 5;
    console.log(a) // no escopo de bloco "a" é reatribuído e passa a ser 5.
}

console.log(a) // no escopo global a continua sendo 10.

function logName(){
    const name = "Pablo";
    console.log(name)
}

const name = "Pedro"
logName()   
console.log(name)

// Arrow functions

/* 
* é um recurso para criar funções de forma mais simples;
* mas ele não funciona exatamente como uma function em todos os aspectos;
* o this da arrow function é relacionado ao elemento pai de quem está a executando;
 */

const sum = function sum(a, b){
    return a + b
}

/* const arrowSum = (a,b) => {
    return a + b;
} */

const arrowSum = (a , b) => a + b // quando eu tenho apenas uma linha de código a arrow function nos permite escrever dessa forma

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (nome) =>{
    if(nome){
        return console.log(`Olá, ${nome}, seja bem vindo!`)
    }else{
        return console.log(" vá para casa do caralho!")
    }
}

const testeArrow = ()=> console.log("testou!")
testeArrow()

greeting("Pablo")
greeting()

const user = {
    name: "Theo",
    sayname(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log(`Nome do usuário: ${self.name}`)
        }, 500)
    },
}

user.sayname()

// Método filter

/* 

* é um método de array para filtrar dados, baseado em alguma condição que estabelecemos;
* 

*/


const users = [
    {nome: "Pablo", available: true},
    {nome: "Tais", available:false},
    {nome: "Daniel", available:false},
    {nome: "Gabriel", available:true}
]

let availableUsers = users.filter( (user)=> user.available)
let notAvailableUsers = users.filter((user)=> !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

// Método map()

/* 

* O método map também é um método de array, que percorre todos os elementos;
* quando utilizamos o map, estamos querendo modificar os dados do array;
* há vários métodos de array importantes no ES6, este é um deles;

*/

const products = [
    {name: "camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 49.99, category: "Eletro"},
    {name: "Fogão", price: 400.00, category: "Eletro"},
    {name: "calça jeans", price: 50.99, category: "Roupas"},
]

products.map((product)=>{
    if(product.category === "Roupas"){
        product.onsale = true;
    }
})

console.log(products)

// Template literals

/* 

* O recurso de template literals permite concatenar uma string de forma mais simples;
* podemos colocar as variáveis entre o texto;
* a string fica entre aspas duplas: `texto`;
* as variáveis são colocadas desta maneira: ${variavel}

*/


