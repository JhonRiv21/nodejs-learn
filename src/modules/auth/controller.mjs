import bcrypt from 'bcrypt'
import { assignToken } from '../../auth/index.mjs'

export default async function createController (dbInjected) {
  const db = dbInjected || (await import('../../DB/mysql.mjs'))
  const { addItem } = db
  const table = 'auth'

  const login = async (user, password) => {
    const data = await db.query(table, { user })

    return bcrypt.compare(password, data.password)
      .then((res) => {
        if (res) {
          const plainData = { ...data }
          return assignToken(plainData)
        } else {
          throw new Error('Información inválida')
        }
      })
  }

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
    addId,
    login
  }
}
