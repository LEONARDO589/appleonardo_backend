const mysql = require('mysql2/promise');

require("dotenv").config({path: "variables.env"});

//Mysql 
const conectarBD = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORTS,
    user: process.env.USER_BASE,
    password: process.env.PASSWORD_BASE,
    database: process.env.DATA_BASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
});


module.exports = conectarBD;
