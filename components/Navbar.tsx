"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Package } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Berita", href: "#berita" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
            <span className="text-primary">Polarius</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* <div className="hidden md:flex items-center gap-3">
            <Link href="#" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">
              Masuk
            </Link>
            <Link
              href="#"
              className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary-dark transition-colors duration-200"
            >
              Daftar Gratis
            </Link>
          </div> */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link href="#" className="btn-outline text-center text-sm">
              Masuk
            </Link>
            <Link href="#" className="btn-primary justify-center text-sm">
              Daftar Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
