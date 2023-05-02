const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001

app.use(cors())

const chefs = require('./chefs.json')
app.get('/', (req, res) => {
    res.send(chefs)
})
app.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const chef = chefs.find(chef => chef.id == id)
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})