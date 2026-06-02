import { ArrowRight, BadgeCheck, Clock3, KeyRound } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: BadgeCheck, value: "%100", label: "sigortalı süreç" },
  { icon: Clock3, value: "7/24", label: "operasyon desteği" },
  { icon: KeyRound, value: "15 dk", label: "hızlı ekip planlama" }
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-ink text-white">
      <Image
        alt="Lüks otel girişinde profesyonel vale hizmeti"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/premium-valet-hero.png"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/78 to-ink/25" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-pad flex min-h-[calc(100vh-5rem)] items-center py-16">
        <div className="max-w-3xl">
          <p className="eyebrow">Premium otopark çözümleri</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Premium Vale Hizmeti
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Araç tesliminden otopark yönetimine kadar güvenli, hızlı ve profesyonel çözümler.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="gold-button" href="#iletisim">
              Hizmet Al
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </a>
            <a className="dark-button" href="#paketler">
              Teklif İste
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  className="rounded-lg border border-white/[0.12] bg-white/[0.08] p-4 backdrop-blur"
                  key={item.label}
                >
                  <Icon aria-hidden="true" className="h-5 w-5 text-gold" />
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
