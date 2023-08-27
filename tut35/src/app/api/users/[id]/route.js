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
