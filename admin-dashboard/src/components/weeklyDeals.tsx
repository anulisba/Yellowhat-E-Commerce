"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WeeklyDealsTable = () => {
    const router = useRouter();
    const [products] = useState([
        {
            id: "#HW001",
            name: "Cordless Drill Set",
            price: "$149.99",
            offerPrice: "$129.99",
            image: "/images.png",
            nzdImage: "/images/nzd-placeholder.png",
        },
        {
            id: "#HW002",
            name: "Adjustable Wrench Set",
            price: "$59.99",
            offerPrice: "$49.99",
            image: "/images.png",
            nzdImage: "/images/nzd-placeholder.png",
        },
        {
            id: "#HW003",
            name: "Heavy Duty Hammer",
            price: "$29.99",
            offerPrice: "$24.99",
            image: "/images.png",
            nzdImage: "/images/nzd-placeholder.png",
        },
        {
            id: "#HW004",
            name: "Cordless Drill Set",
            price: "$149.99",
            offerPrice: "$129.99",
            image: "/images.png",
            nzdImage: "/images/nzd-placeholder.png",
        },
        {
            id: "#HW005",
            name: "Adjustable Wrench Set",
            price: "$59.99",
            offerPrice: "$49.99",
            image: "/images.png",
            nzdImage: "/images/nzd-placeholder.png",
        },
        {
            id: "#HW006",
            name: "Heavy Duty Hammer",
            price: "$29.99",
            offerPrice: "$24.99",
            image: "/images.png",
            nzdImage: "/images/nzd-placeholder.png",
        },
    ]);

    return (
        <div className="w-full bg-white p-4 rounded-lg shadow">
            <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-semibold">Weekly Deals - Hardware Tools</h2>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-[14px]" onClick={() => router.push("/Home/Deals")}>View All Deals</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-[14px]">
                            <th className="p-2">Product Image</th>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Product ID</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Offer Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b hover:bg-gray-50 transition text-[13px]">
                                <td className="p-2">
                                    <Image src={product.image} alt={product.name} width={40} height={40} className="rounded-md" />
                                </td>
                                <td className="p-2">
                                    {product.name}
                                </td>
                                <td className="p-2 text-gray-600">{product.id}</td>
                                <td className="p-2 font-semibold">{product.price}</td>
                                <td className="p-2 text-red-600 font-semibold">{product.offerPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WeeklyDealsTable;
