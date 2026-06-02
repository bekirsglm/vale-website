import { Facebook, Instagram, Linkedin, ShieldCheck } from "lucide-react";

const quickLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Süreç" },
  { href: "#paketler", label: "Paketler" },
  { href: "#iletisim", label: "İletişim" }
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="inline-flex items-center gap-3" aria-label="Premium Vale ana sayfa">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-ink">
              <ShieldCheck aria-hidden="true" size={22} />
            </span>
            <span className="text-lg font-semibold">Premium Vale</span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
            Araç tesliminden otopark yönetimine kadar güvenli, hızlı ve profesyonel premium vale çözümleri.
          </p>
          <div className="mt-6 flex gap-3" aria-label="Sosyal medya bağlantıları">
            <a className="flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.12] text-slate-200 transition hover:border-gold hover:text-gold" href="#" aria-label="Instagram">
              <Instagram aria-hidden="true" size={18} />
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.12] text-slate-200 transition hover:border-gold hover:text-gold" href="#" aria-label="LinkedIn">
              <Linkedin aria-hidden="true" size={18} />
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.12] text-slate-200 transition hover:border-gold hover:text-gold" href="#" aria-label="Facebook">
              <Facebook aria-hidden="true" size={18} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Hızlı linkler</h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a className="text-sm text-slate-300 transition hover:text-gold" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">İletişim</h2>
          <address className="mt-5 space-y-3 not-italic text-sm leading-6 text-slate-300">
            <p>Levent, İstanbul</p>
            <p>+90 212 000 00 00</p>
            <p>teklif@premiumvale.com</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pad flex flex-col gap-3 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Premium Vale. Tüm hakları saklıdır.</p>
          <p>
            Developed by{" "}
            <a
              className="font-semibold text-gold transition hover:text-white"
              href="https://www.bekirsaglam.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              BEKİR SAĞLAM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
