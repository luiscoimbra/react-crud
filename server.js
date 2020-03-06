var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())

let employees = [
    {id: 1, name: "John"},
    {id: 2, name: "Cass"}
]

const GET_DELAY = 1000 // 1 sec

function generateRandomId() {
    return Math.round(Math.random() * 999999)
}

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    setTimeout(() => res.json(employees), GET_DELAY)
})

app.post('/', (req, res) => {
    employees.push({...req.body, id: generateRandomId()})
    res.json({ok: true})
})

app.delete('/:id', (req, res) => {
    let id = req.params.id
    employees = employees.filter(e => e.id !== +id)
    res.json({ok: true})
})

app.listen(3001, () => {
    console.log('small server running at 3001')
})