const express = require('express')
const app = express()
const port = 4000

app.get('/', (_, res) => {
  res.status(200).send({ name: 'Mary Poppins'})
})

app.listen(port, () => {
  console.log(`Example app without cors listening on port ${port}`)
})