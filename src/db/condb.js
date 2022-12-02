import { createPool } from "mysql2/promise";

import * as dotenv from 'dotenv'
dotenv.config({path: "variables.env"})

export const pool = new createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER_BASE,
    password: process.env.PASSWORD_BASE,
    database: process.env.DATA_BASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 
});

