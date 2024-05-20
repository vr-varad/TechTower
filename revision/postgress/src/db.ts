import {Client} from 'pg'
import dotenv from 'dotenv'
dotenv.config()


export const db = new Client({connectionString : process.env.postgress_sql_connection})

const createUserTable = async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS my_users (
                id SERIAL PRIMARY KEY,
                name TEXT,
                email TEXT,
                password TEXT
            )
        `)
        console.log('Created users table')
    } catch (error) {
        console.error('Error creating users table', error)
    }
}


export const connectDB = async () => {
    try {
        await db.connect()
        await createUserTable()
        console.log('Connected to Postgress')
    } catch (error) {
        console.error('Error connecting to Postgress', error)
    }
}
