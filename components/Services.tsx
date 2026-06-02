import { Building2, CalendarCheck2, Hotel, UtensilsCrossed } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Restoran vale hizmeti",
    text: "Yoğun giriş saatlerinde marka algısını koruyan, hızlı teslim ve çağrı akışı."
  },
  {
    icon: Hotel,
    title: "Otel vale hizmeti",
    text: "Misafir karşılama standartlarına uyumlu, resepsiyon ve güvenlik ekibiyle entegre operasyon."
  },
  {
    icon: CalendarCheck2,
    title: "Etkinlik vale hizmeti",
    text: "Davet, lansman ve organizasyonlarda kontrollü araç kabul, park ve teslim planlaması."
  },
  {
    icon: Building2,
    title: "Kurumsal otopark yönetimi",
    text: "Personel, ziyaretçi ve filo araçları için raporlanabilir, disiplinli otopark yönetimi."
  }
];

export default function Services() {
  return (
    <section className="section-pad bg-mist" id="hizmetler">
      <div className="container-pad">
        <p className="eyebrow">Hizmetler</p>
        <h2 className="section-title">Her giriş noktasında premium karşılama</h2>
        <p className="section-copy">
          İşletmenizin temposuna göre kurgulanan vale ekipleriyle misafir deneyimini güvenli ve
          ölçülebilir hale getiriyoruz.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="premium-card" key={service.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-gold">
                  <Icon aria-hidden="true" size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
