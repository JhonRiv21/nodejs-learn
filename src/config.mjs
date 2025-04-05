import 'dotenv/config'

export const app = {
  port: process.env.PORT || 4000
}
export const jwt = {
  secret: process.env.JET_SECRET || 'notesecret'
}
export const mysql = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DB || 'example'
}
