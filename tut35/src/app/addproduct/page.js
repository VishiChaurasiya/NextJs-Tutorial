"use client";

import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    const addProduct = async () => {
        let response = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({ name, price, company, color, category }),
        });
        response = await response.json();
        if (response.success) alert("New product added successfully");
        else alert("Some error occurred, please try again later");
    };

    return (
        <div className="add-user">
            <h1>Add Product</h1>
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
            <button className="btn" onClick={addProduct}>
                Add Product
            </button>
        </div>
    );
}
