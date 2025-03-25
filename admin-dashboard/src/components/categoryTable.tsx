"use client";

import { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Category {
    id: string;
    name: string;
    image: string;
}

const CategoryTable: React.FC = () => {
    const router = useRouter();

    const handleEdit = (category: Category) => {
        const queryParams = new URLSearchParams({
            id: category.id,
            name: category.name,
            image: category.image
        }).toString();

        router.push(`/Home/Categories/Edit-Category?${queryParams}`);
    };

    const [categories] = useState<Category[]>([
        {
            id: "CAT-001",
            name: "Power Tools",
            image: "/images.png",
        },
        {
            id: "CAT-002",
            name: "Hand Tools",
            image: "/images.png",
        },
        {
            id: "CAT-003",
            name: "Lifting Equipment",
            image: "/images.png",
        },
        {
            id: "CAT-004",
            name: "Cutting Tools",
            image: "/images.png",
        },
        {
            id: "CAT-005",
            name: "Fasteners & Fixings",
            image: "/images.png",
        },
        {
            id: "CAT-006",
            name: "Safety Equipment",
            image: "/images.png",
        },
    ]);

    const handleAddNewClick = () => {
        router.push("/Home/Categories/Add-New-Category")
    }
    return (
        <div className="w-full bg-white p-4 rounded-lg shadow">
            {/* Table Header */}
            <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-semibold">Category List</h2>
                <button className="bg-blue-600 text-white px-4 py-1 text-[14px] rounded-md cursor-pointer" onClick={handleAddNewClick}>
                    + Add New
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-[14px]">
                            <th className="py-1.5 px-3">Category</th>
                            <th className="py-1.5 px-3">Category ID</th>
                            <th className="py-1.5 px-3">Icon Preview</th>
                            <th className="py-1.5 px-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition text-[13px]"
                            >
                                <td className="py-1.5 px-3 flex items-center space-x-3">
                                    {category.name}
                                </td>
                                <td className="py-1.5 px-3 text-gray-600">{category.id}</td>
                                <td className="py-1.5 px-3">
                                    {/* <Image
                                        src={category.image}
                                        alt={category.name}
                                        width={30}
                                        height={30}
                                    /> */}{category.name}
                                </td>
                                <td className="py-1.5 px-3 flex justify-center space-x-2">
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <Eye size={18} />
                                    </button>
                                    <button
                                        className="text-green-600 hover:text-green-800"
                                        onClick={() => handleEdit(category)}
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

export default CategoryTable;
