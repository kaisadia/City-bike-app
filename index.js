const express = require('express')
const cors = require('cors')
const app = express()
const { getAllStations, getOneStation, readMay, readJune, readJuly } = require("./db");

const port = 4000
app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    res.sendStatus(200)
  })

app.get("/stations", async (req, res) => {
    const bikes = await getAllStations();
    res.send(bikes);
  });

app.get("/stations/:id", async (req, res) => {
    const station_id = req.params.id;
    res.json(await getOneStation(station_id))
  });

app.get("/may", async (req, res) => {
    const may = await readMay();
    res.send(may);
  });

app.get("/june", async (req, res) => {
    const june = await readJune();
    res.send(june);
  });

  app.get("/july", async (req, res) => {
    const july = await readJuly();
    res.send(july);
  });




app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
