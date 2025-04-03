import * as db from '../../DB/mysql.mjs'
import createClientController from './controller.mjs'

const ctrl = await createClientController(db)

export default ctrl
