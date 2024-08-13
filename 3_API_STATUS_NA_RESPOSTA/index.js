const express = require("express") // aqui estamos carregando o módulo Express, que é uma biblioteca Node.js usada para construir aplicativos web e APIs de forma simplificada, e agora a variável express está armazenando o módulo Express que foi carregado. Agora podemos usar para configurar e iniciar um servidor web

const app = express() // Aqui chamamos a função Express() o que cria uma nova instância de uma aplicação express, essa instância representada por app, será usada para definir rotas, middleware e outros aspectos do servidor


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas - endpoints

app.post('/createproduct', (req, res)=>{
    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message: "O campo nome é obrigatório!"})
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: `O produto ${name} foi criado com sucesso!`})

})

app.get("/", (req, res)=>{
    res.json({message: "primeira rota criada com sucesso!"})
})

app.listen(3000)    