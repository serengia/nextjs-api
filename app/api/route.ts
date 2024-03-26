import { NextResponse } from "next/server";
import { limiter } from "./routes-config/limiter";

export async function GET(request: Request) {
  const remainingTokens = await limiter.removeTokens(1);
  console.log("REMAINING TOKENS:: ", remainingTokens);

  const origin = request.headers.get("origin");
  if (remainingTokens < 0) {
    return NextResponse.json(
      {
        message: "Too many requests",
      },
      {
        status: 429,
        statusText: "Too many requests.",
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": origin || "*",
        },
      }
    );
  }
  return NextResponse.json({ message: "Welcome to api homepage" });
}
