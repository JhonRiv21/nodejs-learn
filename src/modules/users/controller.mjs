import auth from '../auth/index.mjs'

export default async function createController (dbInjected) {
  const db = dbInjected || (await import('../../DB/mysql.mjs'))
  const { getAllItems, getItem, addItem, deleteItem } = db
  const table = 'users'

  const addId = async (body) => {
    const user = {
      id: body.id,
      name: body.name,
      active: body.active
    }

    const res = await addItem(table, user)
    let insertId = 0

    body.id === 0 ? insertId = res.insertId : insertId = body.id

    if (body.user || body.password) {
      await auth.addId({
        id: insertId,
        user: body.user,
        password: body.password
      })
    }
  }

  return {
    allItems: () => getAllItems(table),
    getUniqueItem: (id) => getItem(table, id),
    deleteId: (body) => deleteItem(table, body),
    addId
  }
}
