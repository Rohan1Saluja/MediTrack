// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { Menu, PlusSquare, X } from "lucide-react"; // For mobile menu
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" }, // Assuming same-page navigation for now
  { href: "#features", label: "Features" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "/about", label: "About" }, // Example: separate page
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <PlusSquare className="text-primary" />
          <span className="text-2xl font-bold text-gray-800">MediTrack</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-teal-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
