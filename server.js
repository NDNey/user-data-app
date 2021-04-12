const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
  res.send('You are the best')
})

app.listen(PORT, () => console.log('Server running'))