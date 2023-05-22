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



async function paginateStations(page, size, search) {
    try {
      const res = await pool.query(`SELECT *
        FROM stations
        WHERE station_name LIKE $3
        ORDER BY id
        LIMIT $2
        OFFSET (($1 - 1) * $2)`,
        [page, size,`%${search}%`])
      return res.rows
    } catch (err) {
      console.log(err?.stack);
    }
  }

  async function paginatedTrips(page, size, dep, ret) {
    try {
      const res = await pool.query(`SELECT dep_time, 
      ret_time, 
      dep_station_name, 
      ret_station_name,
      covered_distance,
      duration
        FROM may
        WHERE dep_station_name LIKE $3
        AND ret_station_name LIKE $4
        ORDER BY id
        LIMIT $2
        OFFSET (($1 - 1) * $2)`,
        [page, size,`%${dep}%`,`%${ret}%` ])
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }

  module.exports ={
    paginateStations,
    paginatedTrips}
