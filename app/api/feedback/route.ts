import { NextResponse } from "next/server";

type Feedback = {
    title?: string,
    message?:string
}

export async function POST(request: Request){
    const data: Feedback = await request.json()
    const {title, message} = data;
    return NextResponse.json({title, message})
}