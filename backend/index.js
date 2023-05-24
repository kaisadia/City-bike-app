const express = require('express')
const cors = require('cors')

const app = express()
const { paginateStations, paginatedTrips, countTrips } = require('./db')

const port = 4000
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.sendStatus(200)
})

app.get('/stations', async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const size = parseInt(req.query.size) || 20
  const search = req.query.search || ''
  res.json(await paginateStations(page, size, search))
})

app.get('/trips', async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const size = parseInt(req.query.size) || 100
  const dep = req.query.dep || ''
  const ret = req.query.ret || ''
  const date = req.query.date || ''
  res.json(await paginatedTrips(page, size, dep, ret, date))
})

app.get('/stations/:id', async (req, res) => {
  const { id } = req.params
  res.json(await countTrips(id))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
