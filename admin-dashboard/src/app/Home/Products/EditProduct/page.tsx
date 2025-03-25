"use client";


import { useEffect, useState } from "react";

// Define TypeScript interface for product data
interface ProductData {
    name: string;
    category: string;
    brand: string;
    description: string;
}

export default function EditProduct() {
    const [productData, setProductData] = useState<ProductData>({
        name: "",
        category: "",
        brand: "",
        description: "",
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            setProductData({
                name: urlParams.get("name") || "",
                category: urlParams.get("category") || "",
                brand: urlParams.get("brand") || "",
                description: urlParams.get("description") || "",
            });
        }
    }, []);
    const [images, setImages] = useState<(string | null)[]>([null, null, null]);

    const handleImageChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };
    const removeImage = (index: number) => {
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);
    };


    return (
        <div className="flex flex-row gap-3 h-[70vh] pr-4">
            <div className="w-1/2 bg-white rounded-[10px] p-4 pt-6">
                <label className="block font-semibold mb-1 text-[14px]">
                    Product name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={productData.name}
                    onChange={(e) =>
                        setProductData({ ...productData, name: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1"
                />

                <div className="flex gap-3">
                    <div className="w-1/2">
                        <label className="block font-semibold text-[14px] mb-1">Category</label>
                        <input
                            type="text"
                            value={productData.category}
                            onChange={(e) =>
                                setProductData({ ...productData, category: e.target.value })
                            }
                            className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block font-semibold text-[14px] mb-1">Brand</label>
                        <input
                            type="text"
                            value={productData.brand}
                            onChange={(e) =>
                                setProductData({ ...productData, brand: e.target.value })
                            }
                            className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]"
                        />
                    </div>
                </div>
                <label className="block font-semibold mb-1 text-[14px]">
                    Add Tags <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Enter product tags" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1" />

                <div className="mt-4">
                    <label className="block font-semibold text-[14px] mb-1">Description</label>
                    <textarea
                        value={productData.description}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                description: e.target.value,
                            })
                        }
                        className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] h-52"
                    ></textarea>
                </div>
            </div>
            <div className="w-1/2 bg-white rounded-[10px] p-6 shadow-md">
                <h3 className="font-semibold mb-3 text-[14px]">Upload images</h3>
                <div className="flex gap-3 mb-4">
                    {images.map((image, index) => (
                        <div key={index} className="w-1/3 h-32 border border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center text-gray-500 relative">
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={(e) => handleImageChange(index, e)}
                            />
                            {image ? (
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-md" />
                                    <button
                                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                                        onClick={() => removeImage(index)}
                                    >
                                        X
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <span className="text-2xl">📤</span>
                                    <span className="text-sm">
                                        Drop your images here or{" "}
                                        <a href="#" className="text-blue-500">
                                            click to browse
                                        </a>
                                    </span>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                <div className="w-full mb-2">
                    <label className="block font-semibold mb-1 text-[14px]">Add size</label>
                    <select className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]">
                        <option>EU - 44</option>
                    </select>
                </div>
                <div className="w-full mb-2">
                    <label className="block font-semibold mb-1 text-[14px]">Add size</label>
                    <select className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]">
                        <option>EU - 44</option>
                    </select>
                </div>
                <div className="w-full mb-2">
                    <label className="block font-semibold mb-1 text-[14px]">Add size</label>
                    <select className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]">
                        <option>EU - 44</option>
                    </select>
                </div>
                <div className="w-full mb-2">
                    <label className="block font-semibold mb-1 text-[14px]">Add size</label>
                    <select className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]">
                        <option>EU - 44</option>
                    </select>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        Add product
                    </button>
                </div>


            </div>
        </div>
    );
}
