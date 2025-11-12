"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Mental Master Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            Mental Master
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-200 font-medium">
          <Link href="/home" className="hover:text-teal-400 transition-colors">
            Home
          </Link>
          <Link
            href="/basics"
            className="hover:text-teal-400 transition-colors"
          >
            Basics
          </Link>
          <Link
            href="/tricks"
            className="hover:text-teal-400 transition-colors"
          >
            Tricks
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-gray-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-4 text-gray-200 font-medium">
            <Link
              href="/home"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/basics"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Basics
            </Link>
            <Link
              href="/tricks"
              className="hover:text-teal-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Tricks
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
