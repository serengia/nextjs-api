import { NextResponse } from "next/server";



export async function middleware(response: Response){
    console.log("Middleware triggered!!!")
    console.log("URL:: ", response.url)
    // console.log(response.type)
    // console.log(response.headers.get("origin"))

    return NextResponse.next()
}

export const config = {
    matcher: ["/api/:path*"]
}