const express = require("express")
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas - endpoints

app.get

app.listen(3000)


