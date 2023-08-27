import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET() {
    const data = user;
    return NextResponse.json(data, { status: 200 });
}

export async function POST(request, response) {
    let payload = await request.json();

    if (payload.name && payload.age && payload.email)
        return NextResponse.json(
            { result: "New user created", success: true },
            { status: 201 }
        );
    else
        return NextResponse.json(
            { result: "Required field not found", success: false },
            { status: 400 }
        );
}
