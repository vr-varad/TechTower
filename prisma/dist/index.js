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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.prisma_user.create({
            data: {
                email,
                firstname,
                lastname,
                password,
            },
        });
        return user;
    });
}
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.prisma_user.findUnique({
            where: {
                id,
            },
        });
        return user;
    });
}
function updateUser(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.prisma_user.update({
            where: {
                id,
            },
            data,
        });
        return user;
    });
}
// insertUser('varad@gmail.com', 'password', 'Varad', 'Kulkarni')
// insertUser('abcd@gmail.com', 'password', 'abcd', 'efgh')
function insertTodo(title, done, description, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.prisma_todo.create({
            data: {
                title,
                done,
                description,
                user_id
            }
        });
        return todo;
    });
}
// insertTodo('Learn Prisma', false, 'Learn Prisma with TypeScript', 1)
// insertTodo('Learn GraphQL', false, 'Learn GraphQL with TypeScript', 1)
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.prisma_todo.findMany({
            where: {
                user_id: userId,
            },
            select: {
                user: true,
                title: true,
                description: true
            }
        });
        console.log(todos);
    });
}
getTodosAndUserDetails(1);
