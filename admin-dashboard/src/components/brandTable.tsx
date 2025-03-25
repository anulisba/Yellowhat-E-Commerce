"use client";

import { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Brand {
    id: string;
    name: string;
    image: string;
}

const BrandTable: React.FC = () => {
    const router = useRouter();

    const handleEdit = (brand: Brand) => {
        const queryParams = new URLSearchParams({
            id: brand.id,
            name: brand.name,
            image: brand.image
        }).toString();

        router.push(`/Home/Brands/Edit-Brand?${queryParams}`);
    };

    const [brands] = useState<Brand[]>([
        {
            id: "BR-001",
            name: "Bosch",
            image: "/images.png",
        },
        {
            id: "BR-002",
            name: "Makita",
            image: "/images.png",
        },
        {
            id: "BR-003",
            name: "DeWalt",
            image: "/images.png",
        },
        {
            id: "BR-004",
            name: "Milwaukee",
            image: "/images.png",
        },
        {
            id: "BR-005",
            name: "Hitachi",
            image: "/images.png",
        },
        {
            id: "BR-006",
            name: "Stanley",
            image: "/images.png",
        },
    ]);

    const handleAddNewClick = () => {
        router.push("/Home/Brands/Add-New-Brand")
    }
    return (
        <div className="w-full bg-white p-4 rounded-lg shadow">
            {/* Table Header */}
            <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-semibold">Brand List</h2>
                <button className="bg-blue-600 text-white px-4 py-1 text-[14px] rounded-md cursor-pointer" onClick={handleAddNewClick}>
                    + Add New
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-[14px]">
                            <th className="py-1.5 px-3">Brand</th>
                            <th className="py-1.5 px-3">Brand ID</th>
                            <th className="py-1.5 px-3">Image Preview</th>
                            <th className="py-1.5 px-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map((brand, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition text-[13px]"
                            >
                                <td className="py-1.5 px-3 flex items-center space-x-3">
                                    {brand.name}
                                </td>
                                <td className="py-1.5 px-3 text-gray-600">{brand.id}</td>
                                <td className="py-1.5 px-3">
                                    {/* <Image
                                        src={brand.image}
                                        alt={brand.name}
                                        width={30}
                                        height={30}
                                    /> */}{brand.name}
                                </td>
                                <td className="py-1.5 px-3 flex justify-center space-x-2">
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <Eye size={18} />
                                    </button>
                                    <button
                                        className="text-green-600 hover:text-green-800"
                                        onClick={() => handleEdit(brand)}
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800">
                                        <Trash2 size={18} />
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

export default BrandTable;
