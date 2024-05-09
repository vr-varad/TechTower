const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

//middleware 
app.use(cors())
app.use(express.json())


//routes

app.post('/create', async(req,res)=>{
    try {
        console.log(1)
        const {description} = req.body
        const newTodo = await db.query("INSERT INTO todos (description) VALUES($1) RETURNING *",[description])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
});

app.get('/todos', async(req,res)=>{
    try {
        const allTodos = await db.query("SELECT * FROM todos")
        res.json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
});

app.get('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const todo = await db.query("SELECT * FROM todos WHERE id = $1",[id])
        res.json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
});

app.put('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const {description} = req.body
        const updateTodo = await db.query("UPDATE todos SET description = $1 WHERE id = $2",[description,id])
        res.json('Todo was updated')
    } catch (error) {
        console.error(error.message)
    }
});


app.delete('/todos/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const deleteTodo = await db.query("DELETE FROM todos WHERE id = $1",[id])
        res.json('Todo was deleted')
    } catch (error) {
        console.error(error.message)
    }
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})