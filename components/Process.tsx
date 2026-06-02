const steps = [
  "Talep oluştur",
  "Ekip yönlendirme",
  "Araç teslim alma",
  "Güvenli park",
  "Araç teslimi"
];

export default function Process() {
  return (
    <section className="section-pad bg-ink text-white" id="surec">
      <div className="container-pad">
        <p className="eyebrow">Süreç</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Net adımlar, kontrollü operasyon
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Talep anından araç teslimine kadar her adım sorumlu ekipler tarafından takip edilir.
        </p>

        <ol className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <li className="relative rounded-lg border border-white/[0.12] bg-white/[0.08] p-5" key={step}>
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold text-sm font-bold text-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {index === 0
                  ? "İhtiyacınız ve lokasyon bilgileri alınır."
                  : "Operasyon sorumlusu akışı güvenli şekilde ilerletir."}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
