const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('short'))


app.get('/', (req, res) => {
    res.send('Hello there! I\'m a newbie here. Testing')
})

app.get('/api/students/:number', (req, res) => {
    // var user1 = {firstname: "Stephen", lastname: "Curry"}
    // var user2 = {firstname: "Kevin", lastname: "Durant"}
    // res.json([user1, user2])
    res.send(req.params.number); 
})



const port = parseInt(process.env.PORT, 10) || 3000
app.listen(port, () => console.log(`Listening on port ${port} ...`))