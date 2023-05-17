const dotenv = require('dotenv')
dotenv.config();

const { Pool, types} = require('pg')
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  })
  types.setTypeParser(1700, function (val) {
    return parseFloat(val);
  });

  
  async function getAllStations() {
    try {
      const res = await pool.query(`SELECT * FROM stations ORDER BY id`)
      return res.rows
    } catch (err) {
      console.log(err?.stack);
    }
  }

async function paginateStations(page, size) {
    try {
      const res = await pool.query(`SELECT *
        FROM stations
        ORDER BY id
        LIMIT $2
        OFFSET (($1 - 1) * $2)`,
        [page, size])
      return res.rows
    } catch (err) {
      console.log(err?.stack);
    }
  }

  async function getOneStation(station_id) {
    try {
      const res = await pool.query(`SELECT * FROM stations WHERE station_id=$1`, 
      [station_id]);
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }

  async function paginatedTrips(page, size) {
    try {
      const res = await pool.query(`SELECT dep_time, 
      ret_time, 
      dep_station_name, 
      ret_station_name,
      covered_distance,
      duration
        FROM may
        ORDER BY id
        LIMIT $2
        OFFSET (($1 - 1) * $2)`,
        [page, size])
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }

  module.exports ={
    getAllStations, 
    getOneStation, 
    paginateStations,
    paginatedTrips}
