import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // http://localhost:3000/api/users?limit=5&max=10

  const searchParams = req.nextUrl.searchParams;
  //   URLSearchParams { 'limit' => '5', 'max' => '10' }
  const query = searchParams.get("limit");
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  const userJson = await user.json();
  return NextResponse.json({ userJson, query: query });
}

export async function POST(req: NextRequest) {
  const body = req.body;
  return NextResponse.json({ body });
}
