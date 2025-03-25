"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function EditCategory() {
    const searchParams = useSearchParams();
    const [categoryName, setCategoryName] = useState('');
    const [existingImage, setExistingImage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // Initialize form data from URL parameters
    useEffect(() => {
        setCategoryName(searchParams.get('name') || '');
        setExistingImage(searchParams.get('image') || '');
    }, [searchParams]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === 'image/svg+xml') {
            setSelectedFile(file);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Here you would typically handle form submission
        const formData = new FormData();
        formData.append('name', categoryName);
        if (selectedFile) {
            formData.append('icon', selectedFile);
        }

        // Add your API call here
        console.log('Submitting:', {
            id: searchParams.get('id'),
            name: categoryName,
            existingImage,
            newFile: selectedFile
        });
    };

    return (
        <div className="pr-4">
            <form onSubmit={handleSubmit} className="w-full p-4 shadow-md bg-white rounded-[10px]">
                {/* Category Name Row */}
                <div className="flex items-center mb-4">
                    <label className="w-1/4 font-semibold text-[14px]">
                        Category name <span className="text-red-500">*</span>
                    </label>
                    <div className="w-3/4 p-2">
                        <input
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            placeholder="Enter category name"
                            className="w-full border border-gray-300 rounded-md p-1.5 text-[13px]"
                            required
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
                                {selectedFile ? (
                                    <span className="text-[13px] p-1 text-center">
                                        {selectedFile.name}
                                    </span>
                                ) : existingImage ? (
                                    <img
                                        src={existingImage}
                                        alt="Category icon"
                                        className="h-20 w-20 object-contain"
                                    />
                                ) : (
                                    <>
                                        <span className="text-2xl">📤</span>
                                        <span className="text-[13px] p-1 text-center">
                                            Drop your SVG file here or <span className="text-blue-500">click to browse</span>
                                        </span>
                                    </>
                                )}
                            </div>
                        </label>

                        {/* Uploaded File Display */}
                        {selectedFile && (
                            <div className="mt-2 flex items-center gap-2 text-sm">
                                <span className="text-gray-600">{selectedFile.name}</span>
                                <button
                                    type="button"
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
                    <button
                        type="submit"
                        className="bg-blue-600 text-white text-[14px] rounded-md px-4 py-1.5 hover:bg-blue-700 transition-colors"
                    >
                        Update Category
                    </button>
                </div>
            </form>
        </div>
    );
}