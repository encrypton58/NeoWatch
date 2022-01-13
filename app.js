const express = require('express');
const app = express()

const router = require('./Routes/router.js')

app.set('view engine', 'pug')

app.use(express.json())
app.use(router)
app.use(express.static(__dirname + '/public'))


module.exports = app