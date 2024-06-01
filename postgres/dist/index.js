"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let { postgresql_connection } = process.env;
const client = new pg_1.Client({
    connectionString: postgresql_connection,
});
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client
            .connect()
            .then(() => console.log("Connected to PostgreSQL"))
            .catch((error) => console.error("Error connecting to PostgreSQL:", error));
        const result = yield client.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
        )
        `);
        console.log(result);
    });
}
function createAddressaTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client
            .connect()
            .then(() => console.log("Connected to PostgreSQL"))
            .catch((error) => console.error("Error connecting to PostgreSQL:", error));
        const result = yield client.query(`
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
    });
}
function insertUser(name, email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client
            .connect()
            .then(() => console.log("Connected to PostgreSQL"))
            .catch((error) => console.error("Error connecting to PostgreSQL:", error));
        const result = yield client.query(`
    INSERT INTO users (name, email) VALUES ($1, $2)
    `, [name, email]);
        console.log(result);
    });
}
function insertAddress(user_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client
            .connect()
            .then(() => console.log("Connected to PostgreSQL"))
            .catch((error) => console.error("Error connecting to PostgreSQL:", error));
        const result = yield client.query(`
        INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)
        `, [user_id, city, country, street, pincode]);
        console.log(result);
    });
}
function getUsers(email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client
            .connect()
            .then(() => console.log("Connected to PostgreSQL"))
            .catch((error) => console.error("Error connecting to PostgreSQL:", error));
        const values = [email];
        const result = yield client.query(`
        SELECT * FROM users WHERE email = $1;
    `, values);
        console.log(result.rows);
    });
}
function joinfunction(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client
            .connect()
            .then(() => console.log("Connected to PostgreSQL"))
            .catch((error) => console.error("Error connecting to PostgreSQL:", error));
        const values = [user_id];
        const result = yield client.query(`
        SELECT * FROM users
        JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = $1
    `, values);
        console.log(result.rows);
    });
}
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`
            DELETE FROM users WHERE id = $1
        `, [id]);
    console.log(result);
});
// createUsersTable();
// createAddressaTable()
// insertUser('John Doe', 'abcd@gmail.com')
// insertUser('Jane Doe', 'jane@gmail.com')
// insertAddress(1,'New York', 'USA', '123 Broadway St', '10001');
// insertAddress(1,'Los Angeles', 'USA', '123 Hollywood St', '90001');
// insertAddress(2,'Mumbai', 'India', '123 Che/nnai St', '900501');
// insertAddress(2,'New York', 'India', '123 Delhi St', '1003501');
// deleteUser(2)
joinfunction(1);
// getUsers('abcd@gmail.com')
const insertUserAndAddress = (name, email, city, country, street, pincode) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    yield client.query('BEGIN');
    try {
        const userResult = yield client.query(`
                INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id
            `, [name, email]);
        const userId = userResult.rows[0].id;
        yield client.query(`
                INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5)
            `, [userId, city, country, street, pincode]);
        yield client.query('COMMIT');
        console.log('Transaction committed');
    }
    catch (error) {
        yield client.query('ROLLBACK');
        throw error;
    }
});
// insertUserAndAddress('Johny Doe', 'jonny@gmail.com', 'New York', 'USA', '123 Broadway St', '10001')
// insertUserAndAddress('Janey Doe', 'janey@gmail.com', 'Los Angeles', 'USA', '123 Hollywood St', '90001')
