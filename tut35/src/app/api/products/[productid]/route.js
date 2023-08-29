import mongoose from "mongoose";
import { connnectionSrt } from "@/lib/db";
import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";

export async function PUT(request, content) {
    const productId = content.params.productid;
    const filter = { _id: productId };
    const payload = await request.json();

    await mongoose.connect(connnectionSrt);
    const result = await Product.findOneAndUpdate(filter, payload);

    return NextResponse.json({ result, success: true });
}
