const router = require('express').Router()

const Person = require('../models/Person')

//Create
router.post('/', async (req, res) => {
    const { name, email, salary, approved } = req.body

    if (!name) {
        res.status(422).json({ error: "O nome é obrigatório!" })
    }
    const person = {
        name,
        salary,
        approved,
        email
    }

    try {
        await Person.create(person)

        res.status(201).json({ message: 'Pessoa inserida com Sucesso!' })
    }
    catch (error) {
        res.status(500).json({ error: error })
    }

})

//Read
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()

        res.status(200).json(people)
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router