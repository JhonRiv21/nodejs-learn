export default async function createController (dbInjected) {
  const db = dbInjected || (await import('../../DB/mysql.mjs'))
  const { addItem } = db
  const table = 'auth'

  const addId = (data) => {
    const authData = {
      id: data.id
    }

    if (data.user) {
      authData.user = data.user
    }

    if (data.password) {
      authData.password = data.password
    }

    return addItem(table, authData)
  }

  return {
    addId
  }
}
