"use client";

import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz?" },
  { href: "#surec", label: "Süreç" },
  { href: "#paketler", label: "Paketler" },
  { href: "#iletisim", label: "İletişim" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white shadow-lg shadow-ink/10">
      <nav className="container-pad flex h-20 items-center justify-between" aria-label="Ana menü">
        <a href="#top" className="flex items-center gap-3" aria-label="Premium Vale ana sayfa">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-ink">
            <ShieldCheck aria-hidden="true" size={22} />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-wide">Premium Vale</span>
            <span className="block text-xs text-slate-300">Güvenli teslim, kusursuz operasyon</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              className="text-sm font-medium text-slate-200 transition hover:text-gold"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
          <a className="gold-button py-2.5" href="#iletisim">
            Teklif Al
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <div className="container-pad grid gap-1 py-4">
            {links.map((link) => (
              <a
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-gold"
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
