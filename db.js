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
      const res = await pool.query(`SELECT * FROM stations`);
      console.log("OK:", res.rows[0]);
      return res.rows;
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

  async function readMay() {
    try {
      const res = await pool.query(`SELECT dep_station_name, ret_station_name, covered_distance, duration FROM may`);
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }

  async function readJune() {
    try {
      const res = await pool.query(`SELECT dep_station_name, ret_station_name, covered_distance, duration FROM june`);
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }

  async function readJuly() {
    try {
      const res = await pool.query(`SELECT dep_station_name, ret_station_name, covered_distance, duration FROM july`);
      return res.rows;
    } catch (err) {
      console.log(err?.stack);
    }
  }



  module.exports ={getAllStations, getOneStation, readMay, readJune, readJuly}
