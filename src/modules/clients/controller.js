const db = require('../../DB/mysql.js');

const table = 'clients'

const allItems = () => {
    return db.getAllItems(table)
}

module.exports = {
    allItems
}