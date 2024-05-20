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
exports.connectDB = exports.db = void 0;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = new pg_1.Client({ connectionString: process.env.postgress_sql_connection });
const createUserTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.db.query(`
            CREATE TABLE IF NOT EXISTS my_users (
                id SERIAL PRIMARY KEY,
                name TEXT,
                email TEXT,
                password TEXT
            )
        `);
        console.log('Created users table');
    }
    catch (error) {
        console.error('Error creating users table', error);
    }
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.db.connect();
        yield createUserTable();
        console.log('Connected to Postgress');
    }
    catch (error) {
        console.error('Error connecting to Postgress', error);
    }
});
exports.connectDB = connectDB;
