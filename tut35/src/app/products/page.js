import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products", {
        cache: "no-cache",
    });
    data = await data.json();
    if (data.success) return data.result;
    return { success: false };
};

export default async function Page() {
    const products = await getProducts();

    return (
        <div>
            <h1>Products List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Company</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.color}</td>
                            <td>{product.company}</td>
                            <td>{product.category}</td>
                            <td>
                                <Link href={`/products/${product._id}`}>
                                    Edit
                                </Link>
                            </td>
                            <td>
                                <DeleteProduct id={product._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
