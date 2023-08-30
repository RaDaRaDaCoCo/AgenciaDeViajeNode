import Sequelize from 'sequelize';
import  dotenv  from "dotenv/config";

console.log(process.env.BD_HOST);

const db = new Sequelize(process.env.DB_NAME, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;