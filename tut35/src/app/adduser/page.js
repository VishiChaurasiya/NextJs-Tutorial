"use client";

import { useState } from "react";
import "../style.css";

export default function Page() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify({ name, age, email }),
        });
        response = await response.json();
        if (response.success) alert("New user added successfully");
        else alert("Some error occurred, please try again later");
    };

    return (
        <div className="add-user">
            <h1>Add New User</h1>
            <input
                type="text"
                placeholder="Enter Name"
                className="input-field"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Age"
                className="input-field"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Email"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" onClick={addUser}>
                Add User
            </button>
        </div>
    );
}
