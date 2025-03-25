"use client";

import { useState } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    offerPrice?: number;
}

const initialProducts: Product[] = [
    { id: '1', name: 'Cordless Drill', price: 89 },
    { id: '2', name: 'Adjustable Wrench Set', price: 24 },
    { id: '3', name: 'Claw Hammer', price: 15 },
    { id: '4', name: 'Screwdriver Set (10-Piece)', price: 30 },
    { id: '5', name: 'Electric Circular Saw', price: 129 },
    { id: '6', name: 'Tape Measure (25ft)', price: 10 },
    { id: '7', name: 'Angle Grinder', price: 79 },
    { id: '8', name: 'Utility Knife', price: 12 },
    { id: '9', name: 'Power Jigsaw', price: 99 },
    { id: '10', name: 'Pliers Set (5-Piece)', price: 35 },
    { id: '11', name: 'Corded Impact Wrench', price: 149 },
    { id: '12', name: 'Workbench with Vise', price: 199 },
];

export default function WeeklyDealsPage() {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [weeklyDeals, setWeeklyDeals] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showOfferModal, setShowOfferModal] = useState(false);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [offerPrice, setOfferPrice] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleProductSelect = (product: Product) => {
        setCurrentProduct(product);
        setShowOfferModal(true);
    };

    const confirmOfferPrice = () => {
        if (!currentProduct) return;
        const offerValue = parseFloat(offerPrice);

        if (isNaN(offerValue)) return;

        const updatedProduct = {
            ...currentProduct,
            offerPrice: offerValue
        };

        setWeeklyDeals(prev => [...prev, updatedProduct]);
        setProducts(prev => prev.filter(p => p.id !== currentProduct.id));
        setShowOfferModal(false);
        setOfferPrice('');
    };

    const removeFromDeals = (id: string) => {
        const productToRemove = weeklyDeals.find(p => p.id === id);
        if (productToRemove) {
            setProducts(prev => [...prev, productToRemove]);
            setWeeklyDeals(prev => prev.filter(p => p.id !== id));
        }
    };

    return (
        <div className="p-6 py-1.5">
            {/* Offer Price Modal */}
            {showOfferModal && currentProduct && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-10">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-[14px] font-semibold mb-4">Set Offer Price</h3>
                        <div className="mb-4">
                            <p className="font-medium text-[13px]">{currentProduct.name}</p>
                            <p className="text-gray-600 text-[13px]">Original Price: ${currentProduct.price}</p>
                        </div>
                        <input
                            type="number"
                            placeholder="Enter offer price"
                            value={offerPrice}
                            onChange={(e) => setOfferPrice(e.target.value)}
                            className="w-full p-2 border rounded-md mb-4 text-[13px]"
                            min="0"
                            step="0.01"
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={confirmOfferPrice}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-[13px]"
                            >
                                Apply Offer
                            </button>
                            <button
                                onClick={() => setShowOfferModal(false)}
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-[13px]"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Available Products */}
                <div className="bg-white p-6 py-4 rounded-lg shadow-sm">
                    <div className="mb-2">
                        <h2 className="text-[14px] font-semibold mb-2">
                            All Products ({products.length})
                        </h2>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[13px]"
                        />
                    </div>
                    <div className="space-y-1 max-h-116 overflow-y-auto">
                        {filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="flex items-center p-3 hover:bg-gray-50 rounded cursor-pointer"
                                onClick={() => handleProductSelect(product)}
                            >
                                <div className="flex-1">
                                    <div className="font-medium text-[13px]">{product.name}</div>
                                    <div className="text-gray-500 text-[13px]">${product.price}</div>
                                </div>
                                <span className="text-blue-600 ml-3 text-[13px]">+ Add Offer</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Weekly Deals */}
                <div className="bg-white p-6 py-4 rounded-lg shadow-sm">
                    <h2 className="text-[14px] font-semibold mb-4">
                        Weekly Deals ({weeklyDeals.length})
                    </h2>
                    <div className="space-y-2 max-h-[500px] overflow-y-auto">
                        {weeklyDeals.map(product => (
                            <div
                                key={product.id}
                                className="flex items-center p-3 hover:bg-gray-50 rounded"
                            >
                                <div className="flex-1">
                                    <div className="font-medium text-[13px]">{product.name}</div>
                                    <div className="flex gap-2">
                                        <span className="line-through text-gray-400 text-[13px]">
                                            ${product.price}
                                        </span>
                                        <span className="text-green-600 font-semibold text-[13px]">
                                            ${product.offerPrice}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromDeals(product.id)}
                                    className="text-red-600 hover:text-red-700 ml-3 text-[13px]"
                                >
                                    - Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}