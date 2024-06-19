import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export async function GET(req: NextRequest){
    return Response.json({
        name: "Varad Gupta",
        email: "varadgupta21@gmail.com"
    })
}

export async function  POST(req: NextRequest) {
    const body = await req.json();
    await client.user.create({
        data : body
    })
    return Response.json({
        message : "Succesfully Logged In",
    })    
}