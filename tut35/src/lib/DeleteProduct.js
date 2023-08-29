"use client";

import { useRouter } from "next/navigation";

export default function DeleteProduct({ id }) {
    const router = useRouter();
    const deleteRecord = async () => {
        let response = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE",
        });
        response = await response.json();
        if (response.success) {
            alert("Product deleted successfully");
            router.push("/products");
        } else alert("Some error occurred, please try again later");
    };

    return (
        <button style={{ cursor: "pointer" }} onClick={deleteRecord}>
            Delete
        </button>
    );
}
