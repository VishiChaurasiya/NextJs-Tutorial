"use client";

import { useEffect, useState } from "react";

export default function Page({ params }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getUser(params.userid);
    }, []);

    const getUser = async (id) => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        const {
            result: { name, age, email },
        } = await data.json();

        setName(name);
        setAge(age);
        setEmail(email);
    };

    const updateUser = async () => {
        let response = await fetch(
            `http://localhost:3000/api/users/${params.userid}`,
            {
                method: "PUT",
                body: JSON.stringify({ name, age, email }),
            }
        );
        response = await response.json();

        if (response.success) alert("User updated successfully");
        else alert("Some error occurred, please try again later");
    };

    return (
        <div className="add-user">
            <h1>Update User</h1>
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
            <button className="btn" onClick={updateUser}>
                Update User
            </button>
        </div>
    );
}
