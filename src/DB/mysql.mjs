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

export const addItem = (table, data) => {

}

export const deleteItem = (table, id) => {

}
