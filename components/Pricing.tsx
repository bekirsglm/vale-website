import { Check } from "lucide-react";

const packages = [
  {
    name: "Standart",
    description: "Restoran ve küçük işletmeler için günlük vale operasyonu.",
    features: ["Temel ekip planlama", "Araç teslim kayıt akışı", "Mesai içi destek", "Haftalık operasyon özeti"]
  },
  {
    name: "Premium",
    description: "Otel, davet ve yoğun giriş trafiği olan markalar için.",
    features: ["Deneyimli ekip lideri", "7/24 koordinasyon", "Sigortalı hizmet süreci", "Günlük performans raporu"],
    featured: true
  },
  {
    name: "Kurumsal",
    description: "Çok lokasyonlu işletmeler ve otopark yönetimi için ölçeklenebilir çözüm.",
    features: ["Özel operasyon yöneticisi", "Vardiya ve filo planlama", "SLA bazlı raporlama", "Kurumsal entegrasyon desteği"]
  }
];

export default function Pricing() {
  return (
    <section className="section-pad bg-mist" id="paketler">
      <div className="container-pad">
        <p className="eyebrow">Paketler</p>
        <h2 className="section-title">İhtiyacınıza uygun vale modeli</h2>
        <p className="section-copy">
          Paketler başlangıç kapsamını gösterir; ekip sayısı, lokasyon ve hizmet saatine göre teklif netleştirilir.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              className={`rounded-lg border p-7 shadow-soft ${
                item.featured
                  ? "border-gold bg-ink text-white"
                  : "border-slate-200 bg-white text-text"
              }`}
              key={item.name}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`text-2xl font-semibold ${item.featured ? "text-white" : "text-ink"}`}>
                    {item.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-6 ${item.featured ? "text-slate-300" : "text-slate-600"}`}>
                    {item.description}
                  </p>
                </div>
                {item.featured ? (
                  <span className="rounded-md bg-gold px-3 py-1 text-xs font-semibold text-ink">
                    Öne çıkan
                  </span>
                ) : null}
              </div>

              <ul className="mt-8 space-y-4">
                {item.features.map((feature) => (
                  <li className="flex gap-3 text-sm" key={feature}>
                    <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className={item.featured ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                className={item.featured ? "gold-button mt-8 w-full" : "mt-8 inline-flex w-full items-center justify-center rounded-md border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"}
                href="#iletisim"
              >
                Teklif Al
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
