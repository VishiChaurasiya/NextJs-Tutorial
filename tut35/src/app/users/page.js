import DeleteUser from "@/utils/DeleteUser";
import Link from "next/link";

async function getUsers() {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}

export default async function Page() {
    const users = await getUsers();

    return (
        <div>
            <h1>Users List</h1>
            {users.map((item) => (
                <div>
                    <Link
                        href={`users/${item.id}`}
                        style={{ display: "inline-block", width: "100px" }}
                    >
                        {item.name}
                    </Link>
                    <Link
                        href={`users/${item.id}/update`}
                        style={{ display: "inline-block", width: "100px" }}
                    >
                        Edit
                    </Link>
                    <DeleteUser id={item.id} />
                </div>
            ))}
        </div>
    );
}
