import { NextResponse } from "next/server";

export async function GET(request: Request) {

    // console.log({ metho: request.method });

    return NextResponse.json({
        method: 'GET',
        count: 100
    });
}