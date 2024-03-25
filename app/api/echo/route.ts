import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const name = searchParams.get("name")
    const country = searchParams.get("country")
    return NextResponse.json({name, country})
}