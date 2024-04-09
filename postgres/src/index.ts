import  {Client} from 'pg'
import dotenv from 'dotenv'
dotenv.config()

let {postgresql_connection } = process.env;

const client = new Client({
    connectionString: postgresql_connection
})



async function createUsersTable() {

    await client.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(error => console.error('Error connecting to PostgreSQL:', error));
    const result = await client.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
        )
        `)
        console.log(result)
    }

    async function createAddressaTable(){
        await client.connect()
            .then(() => console.log('Connected to PostgreSQL'))
            .catch(error => console.error('Error connecting to PostgreSQL:', error));
        const result = await client.query(`
        CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )`);
        console.log(result)
    }
    
    
async function insertUser(name: string, email: string) {

    await client.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(error => console.error('Error connecting to PostgreSQL:', error));
    const result = await client.query(`
    INSERT INTO users (name, email) VALUES ($1, $2)
    `, [name, email])
    console.log(result)
}


async function insertAddress(user_id: number, city: string, country: string, street: string, pincode: string) {
    
        await client.connect()
            .then(() => console.log('Connected to PostgreSQL'))
            .catch(error => console.error('Error connecting to PostgreSQL:', error));
        const result = await client.query(`
        INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)
        `, [user_id, city, country, street, pincode])
        console.log(result)
    }


async function getUsers(email: string   ) {

    await client.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(error => console.error('Error connecting to PostgreSQL:', error));
    const values : string[] = [email]
    const result = await client.query(`
        SELECT * FROM users WHERE email = $1;
    `, values)
    console.log(result.rows)
}


async function joinfunction(user_id: number) {
    await client.connect()
        .then(() => console.log('Connected to PostgreSQL'))
        .catch(error => console.error('Error connecting to PostgreSQL:', error));
    const values : number[] = [user_id]
    const result = await client.query(`
        SELECT * FROM users
        JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1
    `, values)
    console.log(result.rows)
}
// createUsersTable()
// createAddressaTable()
// insertUser('John Doe', 'abcd@gmail.com')
// insertAddress(1,'New York', 'USA', '123 Broadway St', '10001');
joinfunction(1)
// getUsers('abcd@gmail.com')