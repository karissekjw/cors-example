const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
  origin: ['http://localhost:3000']
}

app.use(cors(corsOptions))

const port = 8000

app.get('/', (_, res) => {
  res.status(200).send({ name: 'Mary Poppins'})
})

app.listen(port, () => {
  console.log(`Example app without cors listening on port ${port}`)
})