const express = require('express')
const app = express()   // Creating a server
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${port}`)
})