const express = require('express')
const cors = require('cors')
const app = express()
const { getAllStations, getOneStation, paginateStations,
paginatedTrips } = require("./db");

const port = 4000
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    res.sendStatus(200)
  })

  app.get("/allstations", async (req, res) => {
    const bikes = await getAllStations();
    res.send(bikes);
  });

app.get("/stations", async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const size = parseInt(req.query.size) 
    const bikes = await paginateStations(page, size);
    res.send(bikes);
  });

app.get("/trips", async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const size = parseInt(req.query.size) 
    const trips = await paginatedTrips(page, size);
    res.send(trips);
  });



app.get("/stations/:id", async (req, res) => {
    const station_id = req.params.id;
    res.json(await getOneStation(station_id))
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
