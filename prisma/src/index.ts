import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(email: string, password: string, firstname: string, lastname: string) {

    const user = await prisma.prisma_user.create({
        data: {
        email,
        firstname,
        lastname,
        password
        }
    })
    
    return user
}

async function getUser(id: number){
    const user = await prisma.prisma_user.findUnique({
        where: {
            id
        }
    })

    return user
}

interface updateUser {
    email?: string,
    password?: string,
    firstname?: string,
    lastname?: string
}

async function updateUser(id: number, data: updateUser){
    const user = await prisma.prisma_user.update({
        where: {
            id
        },
        data
    })

    return user
}


// insertUser('varad@gmail.com', 'password', 'Varad', 'Kulkarni')
// getUser(1).then(user => console.log(user))
updateUser(1, {email: 'abcd@gmail.com'}).then(user => console.log(user))