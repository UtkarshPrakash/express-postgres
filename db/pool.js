const { Pool } = require("pg");
require('dotenv').config();

const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const user = process.env.PG_USER;
const database = process.env.PG_DB;
const password = process.env.PG_PASS;

// All of the following properties should be read from environment
// It has been hardcoded here for the sake of simplicity
module.exports = new Pool({
    host: host, // or wherever the DB is hosted
    user: user,
    database: database,
    password: password,
    port: port // default PG port
});

// Instead of using entire object above
// We can simply use a connection string
// new Pool({
//    connectionString: "postgresql://<roleName>:<rolePassword>@localhost:5432/users"
// });