import { createConnection } from 'mysql'
import { mysql as _mysql } from '../config.mjs'

const dbConfig = {
  host: _mysql.host,
  user: _mysql.user,
  password: _mysql.password,
  database: _mysql.database
}

let conecction

const connectMySQL = () => {
  conecction = createConnection(dbConfig)

  conecction.connect((err) => {
    if (err) {
      console.error('error with conecction', err)

      setTimeout(() => {
        connectMySQL()
      }, 300)
    } else {
      console.log('connected')
    };
  })

  conecction.on('error', err => {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      connectMySQL()
    } else {
      throw err
    };
  })
}

connectMySQL()

export const getAllItems = (table) => {
  return new Promise((resolve, reject) => {
    conecction.query(`SELECT * FROM ${table}`, (error, result) => {
      return error ? reject(error) : resolve(result)
    })
  })
}

export const getItem = (table, id) => {
  return new Promise((resolve, reject) => {
    conecction.query(`SELECT * FROM ${table} WHERE id = ?`, [id], (error, result) => {
      return error ? reject(error) : resolve(result)
    })
  })
}

const updateItem = (table, data) => {
  return new Promise((resolve, reject) => {
    conecction.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, data.id], (error, result) => {
      return error ? reject(error) : resolve(result)
    })
  })
}

const createItem = (table, data) => {
  return new Promise((resolve, reject) => {
    conecction.query(`INSERT INTO ${table} SET ?`, [data], (error, result) => {
      return error ? reject(error) : resolve(result)
    })
  })
}

export const addItem = (table, data) => {
  return data && data.id === 0 ? createItem(table, data) : updateItem(table, data)
}

export const deleteItem = (table, data) => {
  return new Promise((resolve, reject) => {
    conecction.query(`DELETE FROM ${table} WHERE id = ?`, data.id, (error, result) => {
      return error ? reject(error) : resolve(result)
    })
  })
}
