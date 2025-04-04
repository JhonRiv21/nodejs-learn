import * as db from '../../DB/mysql.mjs'
import createController from './controller.mjs'

const ctrl = await createController(db)

export default ctrl
