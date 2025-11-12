"use client";
import React, { useState, useEffect } from "react";
import { Calculator, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [equation, setEquation] = useState("");
  const [floatingSymbols, setFloatingSymbols] = useState([]);

  const mathSymbols = [
    "∫",
    "∑",
    "π",
    "∞",
    "√",
    "∂",
    "α",
    "β",
    "θ",
    "λ",
    "≠",
    "≈",
    "≤",
    "≥",
    "Δ",
    "∇",
    "∀",
    "∃",
    "∈",
    "∉",
    "⊂",
    "⊆",
    "∩",
    "∪",
    "×",
    "÷",
    "±",
    "≡",
    "≅",
    "→",
    "⇔",
    "∴",
    "∵",
    "⊥",
    "∥",
    "∧",
    "∨",
    "¬",
    "ℝ",
    "ℂ",
    "ℚ",
    "ℤ",
    "ℕ",
    "ϕ",
    "Ψ",
    "Ω",
  ];

  useEffect(() => {
    // Generate random floating symbols
    const symbols = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setFloatingSymbols(symbols);

    // Animate the equation
    const equations = [
      "404 = 4² x 25 + 4",
      "404 = 20² + 4",
      "404 = 2² x 101",
      "404 ≠ found",
    ];
    let index = 0;
    const interval = setInterval(() => {
      setEquation(equations[index % equations.length]);
      index++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Floating math symbols background */}
      {floatingSymbols.map((item) => (
        <div
          key={item.id}
          className="absolute text-white opacity-10 text-4xl pointer-events-none"
          style={{
            left: `${item.left}%`,
            animation: `float ${item.duration}s infinite ease-in-out`,
            animationDelay: `${item.delay}s`,
            top: "-10%",
          }}
        >
          {item.symbol}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(-10vh) rotate(0deg);
          }
          50% {
            transform: translateY(110vh) rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(167, 139, 250, 0.8);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 with Calculator Icon */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div
            className="bg-purple-600 bg-opacity-10 backdrop-blur-lg rounded-2xl p-4 inline-block"
            style={{ animation: "pulse-glow 2s infinite" }}
          >
            <Calculator className="w-12 h-12 text-purple-300" />
          </div>
          <h1 className="text-9xl font-bold text-purple-600 drop-shadow-2xl">
            404
          </h1>
        </div>

        {/* Animated equation */}
        <div className="mb-8 h-12">
          <p className="text-2xl font-mono text-purple-200 transition-opacity duration-500">
            {equation}
          </p>
        </div>

        {/* Error message */}
        <div
          className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white border-opacity-20"
          style={{ animation: "fadeIn 1s ease-out" }}
        >
          <h2 className="text-3xl font-bold text-purple-500 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-purple-400 mb-2">
            We've calculated all possible solutions, but this page doesn't exist
            in our domain.
          </p>
          <p className="text-purple-400">
            The equation of your request has no real solution in our coordinate
            system.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/home")}
            className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-purple-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white border-opacity-30"
          >
            <Home className="w-5 h-5" />
            Return Home
          </button>
        </div>

        {/* Fun math fact */}
        <div className="mt-12 text-purple-300 text-sm">
          <p>💡 Fun fact: 404 = 2² x 101 (a product of primes!)</p>
        </div>
      </div>
    </div>
  );
}
