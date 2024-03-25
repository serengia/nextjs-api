import { NextResponse } from "next/server";

export async function GET(request: Response) {
    const {searchParams} = new URL(request.url)
    const name = searchParams.get("name")
    const country = searchParams.get("country")
    return NextResponse.json({name, country})
}