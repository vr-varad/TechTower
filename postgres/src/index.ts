import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

let { postgresql_connection } = process.env;

const client = new Client({
  connectionString: postgresql_connection,
});

async function createUsersTable() {
  await client
    .connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch((error) => console.error("Error connecting to PostgreSQL:", error));
  const result = await client.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
        )
        `);
  console.log(result);
}




async function createAddressaTable() {
  await client
    .connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch((error) => console.error("Error connecting to PostgreSQL:", error));
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
  console.log(result);
}

async function insertUser(name: string, email: string) {
  await client
    .connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch((error) => console.error("Error connecting to PostgreSQL:", error));
  const result = await client.query(
    `
    INSERT INTO users (name, email) VALUES ($1, $2)
    `,
    [name, email]
  );
  console.log(result);
}

async function insertAddress(
  user_id: number,
  city: string,
  country: string,
  street: string,
  pincode: string
) {
  await client
    .connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch((error) => console.error("Error connecting to PostgreSQL:", error));
  const result = await client.query(
    `
        INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)
        `,
    [user_id, city, country, street, pincode]
  );
  console.log(result);
}

async function getUsers(email: string) {
  await client
    .connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch((error) => console.error("Error connecting to PostgreSQL:", error));
  const values: string[] = [email];
  const result = await client.query(
    `
        SELECT * FROM users WHERE email = $1;
    `,
    values
  );
  console.log(result.rows);
}

async function joinfunction(user_id: number) {
  await client
    .connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch((error) => console.error("Error connecting to PostgreSQL:", error));
  const values: number[] = [user_id];
  const result = await client.query(
    `
        SELECT * FROM users
        JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1
    `,
    values
  );
  console.log(result.rows);
}

const deleteUser = async (id: number) => {
    await client.connect();
    const result = await client.query(
        `
            DELETE FROM users WHERE id = $1
        `,
        [id]
    );
    console.log(result);
    }
// createUsersTable();
// createAddressaTable()
// insertUser('John Doe', 'abcd@gmail.com')
// insertUser('Jane Doe', 'jane@gmail.com')
// insertAddress(1,'New York', 'USA', '123 Broadway St', '10001');
// insertAddress(1,'Los Angeles', 'USA', '123 Hollywood St', '90001');
// insertAddress(2,'Mumbai', 'India', '123 Che/nnai St', '900501');
// insertAddress(2,'New York', 'India', '123 Delhi St', '1003501');
// deleteUser(2)
joinfunction(1)
// getUsers('abcd@gmail.com')


const insertUserAndAddress = async (name: string, email: string, city: string, country: string, street: string, pincode: string) => {
    await client.connect();
    await client.query('BEGIN');
    try {
        const userResult = await client.query(
            `
                INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id
            `,
            [name, email]
        );
        const userId = userResult.rows[0].id;
        await client.query(
            `
                INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)
            `,
            [userId, city, country, street, pincode]
        );
        await client.query('COMMIT');
        console.log('Transaction committed');
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    }
}

// insertUserAndAddress('Johny Doe', 'jonny@gmail.com', 'New York', 'USA', '123 Broadway St', '10001')
// insertUserAndAddress('Janey Doe', 'janey@gmail.com', 'Los Angeles', 'USA', '123 Hollywood St', '90001')