import * as db from '../../DB/mysql.mjs'

const table = 'clients'

export const allItems = () => {
  return db.getAllItems(table)
}

export const getUniqueItem = (id) => {
  return db.getItem(table, id)
}

export const addId = (body) => {
  return db.addItem(table, body)
}

export const deleteId = (body) => {
  return db.deleteItem(table, body)
}
