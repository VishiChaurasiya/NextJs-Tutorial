import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json(
        { name: "Vishi", age: 23, city: "Lucknow" },
        { status: 200 }
    );
}
