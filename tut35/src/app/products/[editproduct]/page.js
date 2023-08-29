"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        let productData = await fetch(
            `http://localhost:3000/api/products/${params.editproduct}`,
            {
                method: "GET",
            }
        );
        const { result, success } = await productData.json();
        const { name, price, company, color, category } = result;

        if (success) {
            setName(name);
            setPrice(price);
            setCompany(company);
            setColor(color);
            setCategory(category);
        } else alert("Some error occurred while retrieving product details");
    };

    const updateProduct = async () => {
        let response = await fetch(
            `http://localhost:3000/api/products/${params.editproduct}`,
            {
                method: "PUT",
                body: JSON.stringify({ name, price, company, color, category }),
            }
        );
        response = await response.json();
        if (response.success) alert("New product added successfully");
        else alert("Some error occurred, please try again later");
    };

    return (
        <div className="add-user">
            <h1>Update Product</h1>
            <input
                type="text"
                placeholder="Enter Name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Price"
                className="input-field"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Company"
                className="input-field"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Color"
                className="input-field"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Category"
                className="input-field"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button className="btn" onClick={updateProduct}>
                Update Product
            </button>
            <br />
            <Link href="/products">Go to Product List</Link>
        </div>
    );
}
