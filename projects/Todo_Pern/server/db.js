const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'Varad@1234',
    host: 'localhost',
    port: 5432,
    database: 'my-pgdb'
})

module.exports = pool