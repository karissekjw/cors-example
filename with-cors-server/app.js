const express = require('express')
const app = express()
const cors = require('cors')

const corsOptions = {
  origin: ['http://localhost:3000']
}

app.use(cors(corsOptions))

const port = 8000

app.get('/', (_, res) => {
  res.send({ name: 'Mary Poppins'}, 200)
})

app.listen(port, () => {
  console.log(`Example app without cors listening on port ${port}`)
})