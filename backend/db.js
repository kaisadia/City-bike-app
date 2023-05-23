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
      const res = await pool.query(`
      SELECT s.*, 
      COUNT(DISTINCT m.dep_station_id) as dep_station_count, 
      COUNT(DISTINCT m.ret_station_id) as ret_station_count,
      AVG(
        CASE 
          WHEN m.dep_station_name = s.station_name THEN m.covered_distance
          ELSE NULL
        END
      ) as avg_distance_dep,
      AVG(
        CASE 
          WHEN m.ret_station_name = s.station_name THEN m.covered_distance
          ELSE NULL
        END
      ) as avg_distance_ret
      FROM stations s
      LEFT JOIN may m ON m.dep_station_id = s.station_id OR m.ret_station_id = s.station_id
      WHERE s.station_name LIKE $3
      GROUP BY s.id
      LIMIT $2
      OFFSET (($1 - 1) * $2)`,
      [page, size,`%${search}%`])

      return res.rows
    } catch (err) {
      console.log(err?.stack);
    }
  }

  async function paginatedTrips(page, size, dep, ret, date) {
    try {
      const res = await pool.query(`SELECT dep_time AS date,
      dep_station_name,
      ret_station_name,
      covered_distance,
      duration
        FROM may
        WHERE dep_station_name LIKE $3
        AND ret_station_name LIKE $4
        AND dep_time LIKE $5
        ORDER BY id
        LIMIT $2
        OFFSET (($1 - 1) * $2)`,
        [page, size,`%${dep}%`,`%${ret}%`, `%${date}%`])
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }

  async function countTrips(id) {
    try {
      const res = await pool.query(`SELECT COUNT(*) FROM may WHERE dep_station_id=$1`, [id])
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }



  module.exports ={
    countTrips,
    paginateStations,
    paginatedTrips}
