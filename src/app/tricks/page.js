'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Calculator, Plus, Minus, X, Divide, Percent, BookOpen, Lightbulb, Radical } from 'lucide-react';
import { toast } from 'react-toastify';

export default function VedicMathsTricks() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [tricks, setTricks] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const limit = 9;

    const observerRef = useRef(null);

    // Fetch tricks with pagination
    const loadTricks = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/getTricks?page=${page}&limit=${limit}`);
            const data = await res.json();

            if (data?.tricks?.length > 0) {
                setTricks((prev) => [...prev, ...data.tricks]);
                if (data.tricks.length < limit) {
                    setHasMore(false); // No more data
                }
            } else {
                setHasMore(false); // Empty page
            }
        } catch (err) {
            toast.error('❌ Failed to load tricks:', err);
        } finally {
            setLoading(false);
        }
    }, [page, hasMore, loading]);

    // Initial Load
    useEffect(() => {
        loadTricks();
    }, [page]);

    // Infinite Scroll Observer
    useEffect(() => {
        if (!observerRef.current && hasMore) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && !loading) {
                        setPage((prev) => prev + 1);
                    }
                },
                { threshold: 1.0 }
            );
            observerRef.current = observer;
        }

        const target = document.querySelector('#scroll-end');
        if (target && observerRef.current) observerRef.current.observe(target);

        return () => {
            if (target && observerRef.current) observerRef.current.unobserve(target);
        };
    }, [hasMore, loading]);

    // Categories
    const categories = [
        { id: 'all', name: 'All Tricks', icon: BookOpen },
        { id: 'addition', name: 'Addition', icon: Plus },
        { id: 'subtraction', name: 'Subtraction', icon: Minus },
        { id: 'multiplication', name: 'Multiplication', icon: X },
        { id: 'division', name: 'Division', icon: Divide },
        { id: 'percentage', name: 'Percentage', icon: Percent },
        { id: 'square_root', name: 'Square Root', icon: Radical },
    ];

    const filteredTricks = activeCategory === 'all'
        ? tricks
        : tricks.filter(trick => trick.category === activeCategory);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'bg-emerald-100 text-emerald-700 border-emerald-300';
            case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-300';
            case 'Hard': return 'bg-rose-100 text-rose-700 border-rose-300';
            default: return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
                        <Calculator className="w-6 h-6 text-indigo-600" />
                        <span className="font-semibold text-gray-800">Vedic Mathematics</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Master Math with Ancient Tricks
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover powerful Vedic mathematics techniques to perform lightning-fast calculations mentally.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                    }}
                                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-linear-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{cat.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tricks Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredTricks.map((trick) => (
                        <div
                            key={trick._id || trick.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-200"
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{trick.title}</h3>
                                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${getDifficultyColor(trick.difficulty)}`}>
                                            {trick.difficulty}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4">{trick.description}</p>

                                <div className="bg-indigo-50 rounded-xl p-4 mb-4 border-2 border-indigo-100">
                                    <div className="text-sm font-medium text-indigo-600 mb-1">Example:</div>
                                    <div className="text-lg font-bold text-indigo-900 font-mono">{trick.example}</div>
                                </div>

                                <div className="mt-4 pt-4 border-t-2 border-gray-100">
                                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm">✓</span>
                                        Step-by-Step Solution:
                                    </h4>
                                    <ol className="space-y-2 mb-4">
                                        {trick.steps.map((step, index) => (
                                            <li key={index} className="flex gap-3 text-gray-700">
                                                <span className="font-bold text-indigo-600 min-w-6">{index + 1}.</span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                    <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
                                        <div className="flex gap-2 items-start">
                                            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                            <div>
                                                <div className="font-semibold text-amber-900 mb-1">Pro Tip:</div>
                                                <div className="text-amber-800 text-sm">{trick.tip}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Infinite Scroll Observer Target */}
                <div id="scroll-end" className="h-10 mt-10 flex justify-center items-center">
                    {loading && hasMore && <p className="text-gray-500 animate-pulse">Loading more tricks...</p>}
                    {!hasMore && <p className="text-gray-500">🎉 You’ve reached the end!</p>}
                </div>
            </div>
        </div>
    );
}