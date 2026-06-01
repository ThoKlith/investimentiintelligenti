"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkHeroPage = pathname === "/chi-siamo" || pathname === "/domande-frequenti" || pathname === "/educazione-finanziaria" || pathname === "/blog" || pathname?.startsWith("/blog/");
  const textColor = (!isScrolled && isDarkHeroPage) ? "text-white" : "text-accent";
  const hoverColor = (!isScrolled && isDarkHeroPage) ? "hover:text-blue-200" : "hover:text-blue-600";
  const buttonStyle = (!isScrolled && isDarkHeroPage) 
    ? "bg-white text-accent hover:bg-blue-600 hover:text-white" 
    : "bg-accent text-white hover:bg-blue-800";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="flex items-center justify-between px-6 lg:px-20 mx-auto max-w-7xl w-full">
        <Link href="/" className={`font-display text-xl md:text-2xl font-bold leading-[1.1] ${textColor} transition-colors z-50`}>
          Dott. Amine<br />Alahiyane, CFP®
        </Link>
        
        {/* Desktop Nav */}
        <div className={`hidden lg:flex flex-1 items-center justify-center gap-8 text-sm font-semibold ${textColor} z-10 pl-8 transition-colors`}>
          <Link href="/" className={`${hoverColor} transition-colors`}>Home</Link>
          <Link href="/chi-siamo" className={`${hoverColor} transition-colors`}>Chi Sono</Link>
          <Link href="/educazione-finanziaria" className={`${hoverColor} transition-colors`}>Educazione Finanziaria</Link>
          <Link href="/blog" className={`${hoverColor} transition-colors`}>Blog</Link>
          <Link href="/domande-frequenti" className={`${hoverColor} transition-colors`}>Domande Frequenti</Link>
        </div>

        <div className="hidden lg:block z-10">
          <a href="https://wa.me/message/IYGM7IR5X6E2J1" target="_blank" rel="noopener noreferrer" className={`px-8 py-3.5 rounded-full transition-colors text-sm font-semibold shadow-lg ${buttonStyle}`}>Prenota Appuntamento</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden ${textColor} p-2 z-10 transition-colors`}
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
          <Link href="/educazione-finanziaria" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Educazione Finanziaria</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Blog</Link>
          <Link href="/domande-frequenti" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-colors">Domande Frequenti</Link>
          <a href="https://wa.me/message/IYGM7IR5X6E2J1" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2 bg-accent text-white rounded-full hover:bg-blue-800 transition-colors mt-2">Prenota Appuntamento</a>
        </div>
      )}
    </nav>
  );
}
