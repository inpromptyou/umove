"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/storage", label: "Storage" },
  { href: "/sales", label: "Sales" },
  { href: "/hire", label: "Hire" },
  { href: "/modifications", label: "Modifications" },
  { href: "/mining", label: "Mining" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-accent text-2xl">📦</span>
          <span>U-MOVE</span>
          <span className="text-accent text-sm font-normal hidden sm:inline">AUSTRALIA</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted hover:text-white transition-colors">
              {n.label}
            </Link>
          ))}
          <Link href="/quote" className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            Get a Quote
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden bg-surface border-t border-border px-4 pb-4">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-white border-b border-border/50">
              {n.label}
            </Link>
          ))}
          <Link href="/quote" onClick={() => setOpen(false)} className="block mt-3 text-center bg-accent hover:bg-accent-hover text-white px-5 py-3 rounded-lg font-semibold">
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
