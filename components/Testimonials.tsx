import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Selin Arman",
    role: "Otel Operasyon Müdürü",
    quote:
      "Misafir karşılama kalitemiz belirgin şekilde yükseldi. Ekip hem dakik hem de çok profesyonel."
  },
  {
    name: "Mert Kaya",
    role: "Restoran Sahibi",
    quote:
      "Yoğun akşam servislerinde araç teslim süresi kısaldı, kapı önü trafiği daha kontrollü hale geldi."
  },
  {
    name: "Derya Sönmez",
    role: "Etkinlik Direktörü",
    quote:
      "Lansman gecesinde yüzlerce araç sorunsuz yönetildi. Raporlama ve iletişim beklentimizin üzerindeydi."
  }
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white" id="referanslar">
      <div className="container-pad">
        <p className="eyebrow">Referanslar</p>
        <h2 className="section-title">Markaların kapı deneyimini güçlendiriyoruz</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure className="premium-card" key={testimonial.name}>
              <Quote aria-hidden="true" className="h-7 w-7 text-gold" />
              <blockquote className="mt-5 text-base leading-7 text-slate-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
