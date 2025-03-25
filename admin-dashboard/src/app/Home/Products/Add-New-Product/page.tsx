"use client";
import { useState } from "react";

export default function Page() {
    const [images, setImages] = useState([null, null, null]);
    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };
    const removeImage = (index) => {
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
                <input type="text" placeholder="Enter product name" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1" />
                <p className="text-gray-400 text-[11px] mb-2">
                    Do not exceed 20 characters when entering the product name.
                </p>

                <div className="flex gap-3 mb-2">
                    <div className="w-1/2">
                        <label className="block font-semibold text-[14px] mb-1">
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]">
                            <option>Choose category</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block font-semibold text-[14px] mb-1">
                            Brand <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]">
                            <option>Brand</option>
                        </select>
                    </div>
                </div>

                <label className="block font-semibold mb-1 text-[14px]">
                    Add Tags <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Enter product tags" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1" />

                <div className="mt-2">
                    <label className="block font-semibold mb-1 text-[14px]">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea placeholder="Description" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] h-52"></textarea>
                    <p className="text-gray-400 text-[11px]">
                        Do not exceed 100 characters when entering the product description.
                    </p>
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

                <label className="block font-semibold mb-1 text-[14px]">
                    Add Short Description <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1" />
                <label className="block font-semibold mb-1 text-[14px]">
                    Add Short Description <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1" />
                <label className="block font-semibold mb-1 text-[14px]">
                    Add Short Description <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1" />
                <label className="block font-semibold mb-1 text-[14px]">
                    Add Short Description <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="" className="w-full border border-gray-300 rounded-md p-1.5 text-[13px] mb-1" />
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        Add product
                    </button>
                </div>


            </div>
        </div>
    );
}
