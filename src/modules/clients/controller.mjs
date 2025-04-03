export default async function createClientController (dbInjected) {
  const db = dbInjected || (await import('../../DB/mysql.mjs'))
  const { getAllItems, getItem, addItem, deleteItem } = db
  const table = 'clients'

  return {
    allItems: () => getAllItems(table),
    getUniqueItem: (id) => getItem(table, id),
    addId: (body) => addItem(table, body),
    deleteId: (body) => deleteItem(table, body)
  }
}
