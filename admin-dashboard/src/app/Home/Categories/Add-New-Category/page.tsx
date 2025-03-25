"use client";
import { useState } from "react";

export default function AddCategory() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image")) {
            setSelectedFile(file);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };

    return (
        <>
            <div className="pr-4">
                <div className="w-full p-4 shadow-md bg-white rounded-[10px]">
                    {/* Category Name Row */}
                    <div className="flex items-center mb-4">
                        <label className="w-1/4 font-semibold text-[14px]">
                            Category name <span className="text-red-500">*</span>
                        </label>
                        <div className="w-3/4 p-2">
                            <input
                                type="text"
                                placeholder="Enter category name"
                                className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]"
                            />
                        </div>
                    </div>

                    {/* Category Icon Upload */}
                    <div className="flex items-center mb-4">
                        <label className="w-1/4 font-semibold text-[14px]">
                            Category Icon <span className="text-red-500">*</span>
                        </label>
                        <div className="w-3/4 p-2">
                            <label className="cursor-pointer">
                                <input
                                    type="file"
                                    accept=".svg"
                                    className="hidden"
                                    onChange={handleFileUpload}
                                />
                                <div className="w-full h-32 border border-dashed border-gray-400 rounded-md flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                                    <span className="text-2xl">📤</span>
                                    <span className="text-[13px] p-1 text-center">
                                        Drop your SVG file here or <span className="text-blue-500">click to browse</span>
                                    </span>
                                </div>
                            </label>

                            {/* Uploaded File Display */}
                            {selectedFile && (
                                <div className="mt-2 flex items-center gap-2 text-sm">
                                    <span className="text-gray-600">{selectedFile.name}</span>
                                    <button
                                        onClick={handleRemoveFile}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-blue-600 text-white text-[14px] rounded-md px-4 py-1.5">
                            Add Category
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
