import express, { Request, Response } from 'express'
import {value} from '@repo/common/config'

const app = express();

app.get('/',(req:Request, res:Response)=>{
    res.send(`My name is ${value} and I am from backend server`)
})

app.listen(3002,()=>{
    console.log("Server starting at server 3002");
})