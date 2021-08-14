const express = require('express')

const app = express()
const PORT = 4000
app.listen(()=> {
    console.log(`¡App running in the port ${PORT}!`)
})