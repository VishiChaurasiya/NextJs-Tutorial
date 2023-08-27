import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const userData = user.filter((item) => item.id == content.params.id);

    return NextResponse.json(
        userData.length
            ? { result: userData[0], success: true }
            : { result: "No Data Found", success: false },
        { status: 200 }
    );
}

export async function PUT(request, content) {
    const payload = await request.json(content);
    payload.id = content.params.id;

    if (!payload.id || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json(
            { result: "Required field not found", success: false },
            { status: 400 }
        );
    }

    return NextResponse.json(
        { result: payload, success: true },
        { status: 200 }
    );
}

export function DELETE(request, content) {
    const id = content.params.id;
    if (id)
        return NextResponse.json(
            { result: "User deleted", success: true },
            { status: 200 }
        );

    return NextResponse.json(
        { result: "Internal error, Please try again later", success: false },
        { status: 400 }
    );
}
