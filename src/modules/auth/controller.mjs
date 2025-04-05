import bcrypt from 'bcrypt'

export default async function createController (dbInjected) {
  const db = dbInjected || (await import('../../DB/mysql.mjs'))
  const { addItem } = db
  const table = 'auth'

  const addId = async (data) => {
    const authData = {
      id: data.id
    }

    if (data.user) {
      authData.user = data.user
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password.toString(), 5)
    }

    return addItem(table, authData)
  }

  return {
    addId
  }
}
