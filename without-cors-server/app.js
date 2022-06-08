const express = require('express')
const app = express()
const port = 4000

app.get('/', (_, res) => {
  res.send({ name: 'Mary Popkins'}, 200)
})

app.listen(port, () => {
  console.log(`Example app without cors listening on port ${port}`)
})