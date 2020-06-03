const express = require('express')
const bodyParser = require('body-parser')
const StartMongoServer = require('./config/db')
const cors = require('cors')
const user = require('./routes/user')

StartMongoServer()

const app = express()

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => res.send('PageBook API'))

app.use("/user", user)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
