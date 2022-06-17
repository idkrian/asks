require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Person = require('./models/Person')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const personRoutes = require('./routes/personRoute')

app.use('/person', personRoutes)


app.get("/", (req, res) => {
    res.json({ msg: "Salve!" })
})

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.ecykg.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3000, (req, res) => {
            console.log('Deu bom!')
        })

    })
    .catch((err) => { console.log("Erro") })
