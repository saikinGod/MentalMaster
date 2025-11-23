"use client";

import { useState, useEffect, useRef } from 'react';
import { Plus, Minus, X, Divide, Percent, Radical, Clock, CheckCircle, XCircle, Play, RotateCcw } from 'lucide-react';

export default function MathPracticeApp() {
    const [activeCategory, setActiveCategory] = useState('addition');
    const [difficulty, setDifficulty] = useState('Easy');
    const [digitsA, setDigitsA] = useState(1);
    const [digitsB, setDigitsB] = useState(1);
    const [perfectSquares, setPerfectSquares] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [stats, setStats] = useState({ correct: 0, total: 0 });
    const timerRef = useRef(null);
    const inputRef = useRef(null);

    const categories = [
        { id: 'addition', name: 'Addition', icon: Plus, symbol: '+' },
        { id: 'subtraction', name: 'Subtraction', icon: Minus, symbol: '-' },
        { id: 'multiplication', name: 'Multiplication', icon: X, symbol: '×' },
        { id: 'division', name: 'Division', icon: Divide, symbol: '÷' },
        { id: 'percentage', name: 'Percentage', icon: Percent, symbol: '%' },
        { id: 'square_root', name: 'Square Root', icon: Radical, symbol: '√' },
    ];

    const difficulties = [
        { level: 'Beginner', time: 50, color: 'blue' },
        { level: 'Easy', time: 30, color: 'emerald' },
        { level: 'Medium', time: 20, color: 'amber' },
        { level: 'Hard', time: 10, color: 'rose' },
    ];

    const generateNumber = (digits) => {
        const min = Math.pow(10, digits - 1);
        const max = Math.pow(10, digits) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const generateQuestion = () => {
        const numA = generateNumber(digitsA);
        const numB = generateNumber(digitsB);
        let question, answer;

        switch (activeCategory) {
            case 'addition':
                question = { a: numA, b: numB };
                answer = numA + numB;
                break;
            case 'subtraction':
                const larger = Math.max(numA, numB);
                const smaller = Math.min(numA, numB);
                question = { a: larger, b: smaller };
                answer = larger - smaller;
                break;
            case 'multiplication':
                question = { a: numA, b: numB };
                answer = numA * numB;
                break;
            case 'division':
                question = { a: numA, b: numB };
                answer = parseFloat((numA / numB).toFixed(2));
                break;
            case 'percentage':
                question = { a: numA, b: numB };
                answer = parseFloat(((numA / 100) * numB).toFixed(2));
                break;
            case 'square_root':
                if (perfectSquares) {

                    // digitsA = how many digits you want the square to have
                    // Example: digitsA = 3 → squared must be between 100 and 999

                    const min = Math.pow(10, digitsA - 1);
                    const max = Math.pow(10, digitsA) - 1;

                    // To get numA such that numA * numA falls in range [min, max]
                    const minRoot = Math.ceil(Math.sqrt(min));
                    const maxRoot = Math.floor(Math.sqrt(max));

                    // Pick a random valid root
                    const numA = Math.floor(Math.random() * (maxRoot - minRoot + 1)) + minRoot;

                    // Perfect square
                    const squared = numA * numA;

                    question = { a: squared };
                    answer = numA;
                } else {
                    const num = generateNumber(digitsA);
                    question = { a: num };
                    answer = parseFloat(Math.sqrt(num).toFixed(2));
                }
                break;
            default:
                question = { a: numA, b: numB };
                answer = numA + numB;
        }

        return { question, answer };
    };

    const startQuestion = () => {
        const { question, answer } = generateQuestion();
        setCurrentQuestion({ ...question, correctAnswer: answer });
        setUserAnswer('');
        setShowResult(false);
        setIsActive(true);
        const timeLimit = difficulties.find(d => d.level === difficulty).time;
        setTimeLeft(timeLimit);

        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    };

    useEffect(() => {
        if (isActive && timeLeft > 0 && !showResult) {
            timerRef.current = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive && !showResult) {
            handleSubmit();
        }
        return () => clearTimeout(timerRef.current);
    }, [timeLeft, isActive, showResult]);

    const handleSubmit = () => {
        if (!currentQuestion || showResult) return;

        const userVal = parseFloat(userAnswer);
        const correctVal = currentQuestion.correctAnswer;
        const correct = Math.abs(userVal - correctVal) <= 0.1;

        setIsCorrect(correct);
        setShowResult(true);
        setIsActive(false);
        setStats(prev => ({
            correct: prev.correct + (correct ? 1 : 0),
            total: prev.total + 1
        }));
    };

    const handleNext = () => {
        startQuestion();
    };

    const handleReset = () => {
        setIsActive(false);
        setCurrentQuestion(null);
        setUserAnswer('');
        setShowResult(false);
        setTimeLeft(0);
    };

    const currentCategory = categories.find(c => c.id === activeCategory);

    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                        Fast Math Practice
                    </h1>
                    {stats.total > 0 && (
                        <div className="mt-4 inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                            <span className="text-sm font-medium text-gray-600">Score:</span>
                            <span className="text-lg font-bold text-indigo-600">
                                {stats.correct}/{stats.total}
                            </span>
                            <span className="text-sm text-gray-500">
                                ({Math.round((stats.correct / stats.total) * 100)}%)
                            </span>
                        </div>
                    )}
                </div>

                {/* Category Selection */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center sm:text-left">Choose Category</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        if (!isActive) {
                                            setActiveCategory(cat.id);
                                            handleReset();
                                        }
                                    }}
                                    disabled={isActive}
                                    className={`flex flex-col items-center gap-2 p-4 rounded-xl font-medium transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-700 hover:bg-linear-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white'
                                        } ${isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span className="text-xs sm:text-sm">{cat.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Difficulty Selection */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center sm:text-left">Choose Difficulty</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {difficulties.map((diff) => (
                            <button
                                key={diff.level}
                                onClick={() => {
                                    if (!isActive) {
                                        setDifficulty(diff.level);
                                        handleReset();
                                    }
                                }}
                                disabled={isActive}
                                className={`p-4 rounded-xl font-medium transition-all duration-300 border-2 ${difficulty === diff.level
                                    ? `bg-${diff.color}-100 text-${diff.color}-700 border-${diff.color}-300 scale-105`
                                    : `bg-gray-50 text-gray-700 border-gray-200 hover:border-${diff.color}-300`
                                    } ${isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <div className="text-lg font-bold">{diff.level}</div>
                                <div className="text-sm mt-1">
                                    <Clock className="w-4 h-4 inline mr-1" />
                                    {diff.time}s
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Configuration Panel */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 text-center sm:text-left">Configure Question</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        {activeCategory === 'square_root' ? (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Number (Digits)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="3"
                                        value={digitsA}
                                        onChange={(e) => !isActive && setDigitsA(Math.max(1, Math.min(3, parseInt(e.target.value) || 1)))}
                                        disabled={isActive}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Square Type
                                    </label>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => !isActive && setPerfectSquares(true)}
                                            disabled={isActive}
                                            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${perfectSquares
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                } ${isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            Perfect
                                        </button>
                                        <button
                                            onClick={() => !isActive && setPerfectSquares(false)}
                                            disabled={isActive}
                                            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${!perfectSquares
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                } ${isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            Any
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Number (Digits)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="5"
                                        value={digitsA}
                                        onChange={(e) => !isActive && setDigitsA(Math.max(1, Math.min(5, parseInt(e.target.value) || 1)))}
                                        disabled={isActive}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Second Number (Digits)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        max="5"
                                        value={digitsB}
                                        onChange={(e) => !isActive && setDigitsB(Math.max(1, Math.min(5, parseInt(e.target.value) || 1)))}
                                        disabled={isActive}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    {!currentQuestion && (
                        <button
                            onClick={startQuestion}
                            className="w-full bg-linear-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <Play className="w-6 h-6" />
                            Start Practice
                        </button>
                    )}
                </div>

                {/* Question Panel */}
                {currentQuestion && (
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                        {/* Timer */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-600">Time Remaining</span>
                                <span className={`text-2xl font-bold ${timeLeft <= 5 ? 'text-rose-600' : timeLeft <= 10 ? 'text-amber-600' : 'text-emerald-600'
                                    }`}>
                                    {timeLeft}s
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-1000 ${timeLeft <= 5 ? 'bg-rose-500' : timeLeft <= 10 ? 'bg-amber-500' : 'bg-emerald-500'
                                        }`}
                                    style={{
                                        width: `${(timeLeft / difficulties.find(d => d.level === difficulty).time) * 100}%`
                                    }}
                                />
                            </div>
                        </div>

                        {/* Question Display */}
                        <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-6 sm:p-8 mb-6">
                            <div className="flex items-center justify-center gap-3 sm:gap-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                                {activeCategory === 'square_root' ? (
                                    <>
                                        <Radical className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
                                        <span>{currentQuestion.a}</span>
                                    </>
                                ) : activeCategory === 'percentage' ? (
                                    <>
                                        <span>{currentQuestion.a}%</span>
                                        <span className="text-indigo-600">of</span>
                                        <span>{currentQuestion.b}</span>
                                    </>
                                ) : (
                                    <>
                                        <span>{currentQuestion.a}</span>
                                        <span className="text-indigo-600">{currentCategory?.symbol}</span>
                                        <span>{currentQuestion.b}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Answer Input */}
                        {!showResult ? (
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Answer</label>
                                <input
                                    ref={inputRef}
                                    type="number"
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                                    className="w-full px-4 py-4 text-2xl text-center rounded-lg border-2 border-gray-200 focus:border-indigo-500 focus:outline-none"
                                    placeholder="Type your answer..."
                                />
                                <button
                                    onClick={handleSubmit}
                                    disabled={!userAnswer}
                                    className="w-full mt-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Submit Answer
                                </button>
                            </div>
                        ) : (
                            <div className="mb-6">
                                {/* Result Display */}
                                <div className={`p-6 rounded-xl mb-4 ${isCorrect ? 'bg-emerald-50 border-2 border-emerald-300' : 'bg-rose-50 border-2 border-rose-300'
                                    }`}>
                                    <div className="flex items-center justify-center gap-3 mb-3">
                                        {isCorrect ? (
                                            <CheckCircle className="w-12 h-12 text-emerald-600" />
                                        ) : (
                                            <XCircle className="w-12 h-12 text-rose-600" />
                                        )}
                                        <span className={`text-2xl font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'
                                            }`}>
                                            {isCorrect ? 'Correct!' : 'Incorrect'}
                                        </span>
                                    </div>
                                    <div className="text-center text-gray-700">
                                        <div className="text-lg mb-2">
                                            Your answer: <span className="font-bold">{userAnswer || 'No answer'}</span>
                                        </div>
                                        {!isCorrect && (
                                            <div className="text-lg">
                                                Correct answer: <span className="font-bold text-emerald-600">{currentQuestion.correctAnswer}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        onClick={handleNext}
                                        className="bg-linear-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Next Question
                                    </button>
                                    <button
                                        onClick={handleReset}
                                        className="bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <RotateCcw className="w-5 h-5" />
                                        Change Settings
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}