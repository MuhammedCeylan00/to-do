const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'postgres', // default postgres
    host: 'localhost',
    database: 'todolist', // `my_todos_db`
    password: 'Muhammed6064', //added during PostgreSQL and pgAdmin installation
    port: '5432' //default port
});

module.exports = pool;