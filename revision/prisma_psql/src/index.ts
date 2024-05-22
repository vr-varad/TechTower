import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const insertData = async (name: string, email: string, password: string) => {
    try {
        await prisma.my_User.create({
            data: {
            name,
            email,
            password
            }
        })
        console.log('Data inserted successfully')
    } catch (error) {
        console.log(error) 
    }
}

// insertData('John Doe', 'johnDoe@gmail.com', 'password123')
// insertData('Jane Doe', 'jane@abcd.com', '1234567')
// insertData('Varad Gupta','varadgupta21@gmail.com','hulalal')

interface User {
    name: string,
    email: string,
    password: string
}

const updateData = async (id: number, {name, email, password}:User) => {
    try {
        await prisma.my_User.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password
            }
        })
        console.log('Data updated successfully')
    } catch (error) {
        console.log(error)
    }
}

const deleteData = async (id: number) => {
    try {
        await prisma.my_User.delete({
            where: {
                id
            }
        })
        console.log('Data deleted successfully')
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (id: number) => {
    try {
        const user = await prisma.my_User.findUnique({
            where: {
                id
            }
        })
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

// updateData(3,{name: 'Johny Doe',email: 'johny@gyahoo.com',password: 'ehehehe'})