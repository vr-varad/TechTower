import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const user = await prisma.prisma_user.create({
    data: {
      email,
      firstname,
      lastname,
      password,
    },
  });

  return user;
}

async function getUser(id: number) {
  const user = await prisma.prisma_user.findUnique({
    where: {
      id,
    },
  });

  return user;
}

interface updateUser {
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
}

async function updateUser(id: number, data: updateUser) {
  const user = await prisma.prisma_user.update({
    where: {
      id,
    },
    data,
  });

  return user;
}

// insertUser('varad@gmail.com', 'password', 'Varad', 'Kulkarni')
// insertUser('abcd@gmail.com', 'password', 'abcd', 'efgh')

async function insertTodo(title: string, done: boolean, description: string, user_id: number) {
  const todo = await prisma.prisma_todo.create({
    data: {
      title,
      done,
      description,
      user_id
    }
  })

  return todo
}

// insertTodo('Learn Prisma', false, 'Learn Prisma with TypeScript', 1)
// insertTodo('Learn GraphQL', false, 'Learn GraphQL with TypeScript', 1)


async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.prisma_todo.findMany({
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
}

getTodosAndUserDetails(1);