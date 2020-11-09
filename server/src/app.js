const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.set('port',process.env.PORT || 3000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/employees', require('./routes/employees.routes'))
app.use('/contractors', require('./routes/contractors.routes'))
app.use('/relations', require('./routes/relation.routes'))


module.exports = app
