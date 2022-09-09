const express = require('express')
const app = express()
const databaseconnection = require('./config/database')
const mainRoute = require('./route/main')
app.use(express.json())
app.use(mainRoute)

databaseconnection()


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3000,()=>{
    console.log("connected to port 3000")
})