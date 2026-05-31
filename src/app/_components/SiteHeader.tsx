"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="flex items-center justify-between px-6 lg:px-20 mx-auto max-w-7xl w-full">
        <Link href="/" className="font-bold text-accent text-xl leading-tight z-10">
          Amine<br />Bouzan
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm font-semibold text-accent z-10 pl-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/chi-siamo" className="hover:text-blue-600 transition-colors">Chi Sono</Link>
          <Link href="/#metodo" className="hover:text-blue-600 transition-colors">Il mio Metodo</Link>
          <Link href="/#faq" className="hover:text-blue-600 transition-colors">Domande Frequenti</Link>
        </div>

        <div className="hidden lg:block z-10">
          <Link href="/contatti" className="px-8 py-3.5 bg-accent text-white rounded-full hover:bg-blue-800 transition-colors text-sm font-semibold shadow-lg">Prenota Appuntamento</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-accent p-2 z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col items-center py-6 gap-6 font-semibold text-accent border-t border-gray-100">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/chi-siamo" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Chi Sono</Link>
          <Link href="/#metodo" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Il mio Metodo</Link>
          <Link href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Domande Frequenti</Link>
          <Link href="/contatti" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2 bg-accent text-white rounded-full hover:bg-blue-800 transition-colors mt-2">Prenota Appuntamento</Link>
        </div>
      )}
    </nav>
  );
}
