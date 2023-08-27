"use client";

export default function DeleteUser({ id }) {
    const deleteUser = async () => {
        let response = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE",
        });
        response = await response.json();

        if (response.success) alert("User deleted successfully");
        else alert("Some error occurred, please try again later");
    };
    return <button onClick={deleteUser}>Delete</button>;
}
