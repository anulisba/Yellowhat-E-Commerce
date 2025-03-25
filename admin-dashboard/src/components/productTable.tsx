"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Define Product Type
interface Product {
    id: string;
    name: string;
    price: string;
    quantity: number;
    sale: number;
    stock: string;
    startDate: string;
    image: string;
}

// Define Props for DeleteCnfModal
interface DeleteCnfModalProps {
    modalCloseHandler: () => void;
    confirmDelete: () => void;
}

const DeleteCnfModal: React.FC<DeleteCnfModalProps> = ({ modalCloseHandler, confirmDelete }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 dark:bg-[#e5e5e5] dark:border dark:border-gray-600">
                <div className="flex justify-between items-center">
                    <h6 className="text-[14px] font-semibold text-[var(--blue)] py-2">Are you sure?</h6>
                    <button onClick={modalCloseHandler} className="dark:text-black">X</button>
                </div>
                <p className="text-gray-600 mb-4 text-[12px] dark:text-black">
                    You are about to delete this product. This action cannot be undone.
                </p>
                <div className="flex gap-4 mx-auto mt-3 justify-end">
                    <button
                        onClick={modalCloseHandler}
                        className="px-4 py-1 bg-blue-600 text-white text-[12px] rounded-[5px] dark:text-black"
                        type="reset"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={confirmDelete}
                        className="px-4 py-1 bg-red-600 text-white text-[12px] rounded-[5px] dark:text-black"
                        type="submit"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProductTable: React.FC = () => {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([
        {
            id: "#HT001",
            name: "Cordless Drill Driver",
            price: "$89.99",
            quantity: 50,
            sale: 10,
            stock: "Best Selling",
            startDate: "2024-03-15",
            image: "/images.png",
        },
        {
            id: "#HT002",
            name: "Adjustable Wrench Set",
            price: "$24.99",
            quantity: 120,
            sale: 15,
            stock: "Best Selling",
            startDate: "2024-03-18",
            image: "/images.png",
        },
        {
            id: "#HT003",
            name: "Claw Hammer with Fiberglass Handle",
            price: "$14.99",
            quantity: 200,
            sale: 5,
            stock: "Top Product",
            startDate: "2024-03-20",
            image: "/images.png",
        },
        {
            id: "#HT004",
            name: "Screwdriver Set (10-Piece)",
            price: "$29.99",
            quantity: 80,
            sale: 20,
            stock: "Top Product",
            startDate: "2024-03-22",
            image: "/images.png",
        },
        {
            id: "#HT005",
            name: "Electric Circular Saw",
            price: "$129.99",
            quantity: 30,
            sale: 8,
            stock: "Best Selling",
            startDate: "2024-03-25",
            image: "/images.png",
        },
        {
            id: "#HT006",
            name: "Tape Measure (25ft)",
            price: "$9.99",
            quantity: 500,
            sale: 25,
            stock: "Top Product",
            startDate: "2024-03-28",
            image: "/images.png",
        },
    ]);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleDeleteClick = (product: Product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const addNewClick = () => {
        router.push("/Home/Products/Add-New-Product");
    };

    const confirmDelete = () => {
        if (selectedProduct) {
            setProducts(products.filter((p) => p.id !== selectedProduct.id));
        }
        setShowModal(false);
    };

    return (
        <div className="w-full bg-white p-4 rounded-lg shadow">
            {showModal && <DeleteCnfModal modalCloseHandler={() => setShowModal(false)} confirmDelete={confirmDelete} />}

            <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-semibold">Product List</h2>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-[14px]" onClick={addNewClick}>+ Add new</button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-[14px]">
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Product ID</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Brand</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Tags</th>
                            <th className="p-2">Uploaded Date</th>
                            <th className="p-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b hover:bg-gray-50 transition text-[13px]">
                                <td className="p-2 flex items-center space-x-3">
                                    <Image src={product.image} alt={product.id} width={40} height={40} className="rounded-md" />
                                    <span className="font-medium">{product.name}</span>
                                </td>
                                <td className="p-2 text-gray-600">{product.id}</td>
                                <td className="p-2 font-semibold">{product.price}</td>
                                <td className="p-2">{product.quantity}</td>
                                <td className="p-2">{product.sale}</td>
                                <td className="p-2">
                                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">{product.stock}</span>
                                </td>
                                <td className="p-2">{product.startDate}</td>
                                <td className="p-2 flex justify-center space-x-2">
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <Eye size={16} />
                                    </button>
                                    <button className="text-green-600 hover:text-green-800">
                                        <Edit size={16} />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteClick(product)}>
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
