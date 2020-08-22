const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Change this part with your own settings
  database: 'cvdesignr', // Change this part with your own settings
  password: 'admin', // Change this part with your own settings
  port: 5432 // Change this part with your own settings
})