"use client";

import { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface Advertisement {
    id: string;
    name: string;
    image: string;
}

const AdvertisementTable: React.FC = () => {
    const router = useRouter();

    const handleEdit = (advertisement: Advertisement) => {
        const queryParams = new URLSearchParams({
            id: advertisement.id,
            name: advertisement.name,
            image: advertisement.image
        }).toString();

        router.push(`/Home/Advertisements/Edit-Advertisement?${queryParams}`);
    };

    const [advertisements] = useState<Advertisement[]>([
        {
            id: "AD-01",
            name: "Advertisement 1",
            image: "/images.png",
        },
        {
            id: "AD-02",
            name: "Advertisement 2",
            image: "/images.png",
        },
        {
            id: "AD-03",
            name: "Advertisement 3",
            image: "/images.png",
        },
    ]);
    const handleAddNewClick = () => {
        router.push("/Home/Advertisements/Add-New-Advertisement")
    }
    return (
        <div className="w-full bg-white p-4 rounded-lg shadow">
            {/* Table Header */}
            <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-semibold">Advertisement List</h2>
                <button className="bg-blue-600 text-white px-4 py-1 text-[14px] rounded-md cursor-pointer" onClick={handleAddNewClick}>
                    + Add New
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-[14px]">
                            <th className="py-1.5 px-3">Advertisement</th>
                            <th className="py-1.5 px-3">Advertisement ID</th>
                            <th className="py-1.5 px-3">Image Preview</th>
                            <th className="py-1.5 px-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {advertisements.map((advertisement, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition text-[13px]"
                            >
                                <td className="py-1.5 px-3 flex items-center space-x-3">
                                    {advertisement.name}
                                </td>
                                <td className="py-1.5 px-3 text-gray-600">{advertisement.id}</td>
                                <td className="py-1.5 px-3">
                                    {/* <Image
                                        src={advertisement.image}
                                        alt={advertisement.name}
                                        width={30}
                                        height={30}
                                    /> */}{advertisement.name}
                                </td>
                                <td className="py-1.5 px-3 flex justify-center space-x-2">
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <Eye size={18} />
                                    </button>
                                    <button
                                        className="text-green-600 hover:text-green-800"
                                        onClick={() => handleEdit(advertisement)}
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

export default AdvertisementTable;
