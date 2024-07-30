import { NextRequest, NextResponse } from "next/server";

let reqCount = 0;

export function middleware(req:NextRequest){
    reqCount++;
    console.log(reqCount)
    const res =  NextResponse.next()
    return res
}

export const config = {
    matcher: '/api/:path*',
  }