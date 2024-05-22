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
const insertData = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.my_User.create({
            data: {
                name,
                email,
                password
            }
        });
        console.log('Data inserted successfully');
    }
    catch (error) {
        console.log(error);
    }
});
// insertData('John Doe', 'johnDoe@gmail.com', 'password123')
// insertData('Jane Doe', 'jane@abcd.com', '1234567')
// insertData('Varad Gupta','varadgupta21@gmail.com','hulalal')
const updateData = (id_1, ...args_1) => __awaiter(void 0, [id_1, ...args_1], void 0, function* (id, name = "", email = "", password = "") {
    try {
        yield prisma.my_User.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password
            }
        });
        console.log('Data updated successfully');
    }
    catch (error) {
        console.log(error);
    }
});
updateData(3, 'Johny Doe', 'johny@gyahoo.com', 'ehehehe');
