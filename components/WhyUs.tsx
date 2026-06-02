import { Clock, GraduationCap, Headphones, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Güvenli teslimat", text: "Anahtar ve araç teslimi kontrollü kayıt akışıyla ilerler." },
  { icon: GraduationCap, title: "Eğitimli personel", text: "Ekiplerimiz protokol, iletişim ve sürüş güvenliği eğitimlerinden geçer." },
  { icon: Headphones, title: "7/24 destek", text: "Operasyon boyunca ulaşılabilir koordinasyon ve hızlı geri dönüş sağlanır." },
  { icon: ShieldCheck, title: "Sigortalı süreç", text: "Hizmet kapsamı şeffaf kurallar ve sigorta güvencesiyle yönetilir." },
  { icon: Zap, title: "Hızlı operasyon", text: "Yoğun saatler için akıllı vardiya, alan ve teslim planlaması yapılır." },
  { icon: Clock, title: "Dakik planlama", text: "Talep, ekip ve teslim noktaları tek operasyon çizelgesinde takip edilir." }
];

export default function WhyUs() {
  return (
    <section className="section-pad bg-white" id="neden-biz">
      <div className="container-pad">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Neden Biz?</p>
            <h2 className="section-title">Güven, hız ve temsil kalitesi aynı masada</h2>
            <p className="section-copy">
              Premium vale hizmeti sadece park etmek değildir; misafirin markanızla ilk ve son
              temasını profesyonelce yönetmektir.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="rounded-lg border border-slate-200 bg-mist p-5" key={reason.title}>
                  <Icon aria-hidden="true" className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
