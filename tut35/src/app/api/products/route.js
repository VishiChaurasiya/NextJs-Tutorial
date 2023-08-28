import { connnectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connnectionSrt);
        const data = await Product.find();
        return NextResponse.json(
            { result: data, success: true },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                result: "Some error occurred, please try again later!",
                success: false,
            },
            { status: 400 }
        );
    }
}

export async function POST(request) {
    try {
        const payload = await request.json();
        await mongoose.connect(connnectionSrt);
        const product = new Product(payload);
        const result = await product.save();
        return NextResponse.json({ result, success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            {
                result: "Some error occurred, please try again later!",
                success: false,
            },
            { status: 400 }
        );
    }
}
