"use strict";
// messaging system
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const app = express();
const { db, connectDB } = require('./db');
app.use(express.json());
app.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Request received');
        const { name, email, password } = req.body;
        const query = `
            INSERT INTO my_users (name, email, password) VALUES ($1, $2, $3)
        `;
        const values = [name, email, password];
        yield db.query(query, values, (error, result) => {
            if (error) {
                console.error('Error inserting user', error);
                res.status(500).send('Error inserting user');
            }
            else {
                console.log('User inserted successfully');
                res.status(200).send('User inserted successfully');
            }
        });
    }
    catch (error) {
        console.error('Error inserting user', error);
    }
}));
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Request received');
        const query = `
            SELECT * FROM my_users
        `;
        yield db.query(query, (error, result) => {
            if (error) {
                console.error('Error fetching users', error);
                res.status(500).send('Error fetching users');
            }
            else {
                console.log('Users fetched successfully');
                res.status(200).send(result.rows);
            }
        });
    }
    catch (error) {
        console.error('Error fetching users', error);
    }
}));
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Request received');
        const id = req.params.id;
        const query = `
            SELECT * FROM my_users WHERE id = $1
        `;
        const values = [id];
        yield db.query(query, values, (error, result) => {
            if (error) {
                console.error('Error fetching user', error);
                res.status(500).send('Error fetching user');
            }
            else {
                console.log('User fetched successfully');
                res.status(200).send(result.rows);
            }
        });
    }
    catch (error) {
        console.error('Error fetching user', error);
    }
}));
app.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Request received');
        const id = req.params.id;
        const { name, email, password } = req.body;
        const query = `
            UPDATE my_users SET name = $1, email = $2, password = $3 WHERE id = $4
        `;
        const values = [name, email, password, id];
        yield db.query(query, values, (error, result) => {
            if (error) {
                console.error('Error updating user', error);
                res.status(500).send('Error updating user');
            }
            else {
                console.log('User updated successfully');
                res.status(200).send('User updated successfully');
            }
        });
    }
    catch (error) {
        console.error('Error updating user', error);
    }
}));
app.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Request received');
        const id = req.params.id;
        const query = `
            DELETE FROM my_users WHERE id = $1
        `;
        const values = [id];
        yield db.query(query, values, (error, result) => {
            if (error) {
                console.error('Error deleting user', error);
                res.status(500).send('Error deleting user');
            }
            else {
                console.log('User deleted successfully');
                res.status(200).send('User deleted successfully');
            }
        });
    }
    catch (error) {
        console.error('Error deleting user', error);
    }
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB();
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    }
    catch (error) {
        console.error('Error starting server', error);
    }
});
start();
