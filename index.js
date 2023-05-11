const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 4000
app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})