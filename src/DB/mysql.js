const mysql = require('mysql');
const config = require('../config.js');

const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conecction;

const connectMySQL = () => {
    conecction = mysql.createConnection(dbConfig);
    
    conecction.connect((err) => {
        if (err) {
            console.error("error with conecction", err);

            setTimeout(() => {
                connectMySQL;
            }, 300)
        } else {
            console.log("connected");
        };
    });

    conecction.on('error', err => {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            connectMySQL;
        } else {
            throw error;
        };
    });
}

connectMySQL();

const getAllItems = (table) => {
    return new Promise((resolve, reject) => {
        conecction.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        })
    })
}

const getItem = (table, id) => {

}

const addItem = (table, data) => {

}

const deleteItem = (table, id) => {
    
}

module.exports = {
    getAllItems,
    getItem,
    addItem,
    deleteItem
}