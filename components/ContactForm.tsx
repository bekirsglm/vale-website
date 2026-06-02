"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type ServiceType = "restoran" | "otel" | "etkinlik" | "kurumsal";

interface ContactFormValues {
  fullName: string;
  phone: string;
  email: string;
  serviceType: ServiceType | "";
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\s()-]{7,20}$/;

function trimValues(values: ContactFormValues): ContactFormValues {
  return {
    fullName: values.fullName.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    serviceType: values.serviceType,
    message: values.message.trim()
  };
}

function validate(values: ContactFormValues): FormErrors {
  const trimmed = trimValues(values);
  const errors: FormErrors = {};

  if (!trimmed.fullName) errors.fullName = "Ad soyad alanı zorunludur.";
  if (!trimmed.phone) errors.phone = "Telefon alanı zorunludur.";
  if (trimmed.phone && !phonePattern.test(trimmed.phone)) errors.phone = "Geçerli bir telefon girin.";
  if (!trimmed.email) errors.email = "E-posta alanı zorunludur.";
  if (trimmed.email && !emailPattern.test(trimmed.email)) errors.email = "Geçerli bir e-posta girin.";
  if (!trimmed.serviceType) errors.serviceType = "Hizmet türü seçin.";
  if (!trimmed.message) errors.message = "Mesaj alanı zorunludur.";
  if (trimmed.message && trimmed.message.length < 10) errors.message = "Mesaj en az 10 karakter olmalıdır.";

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState("");

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccess("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = trimValues(values);
    const validationErrors = validate(trimmed);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setValues(initialValues);
    setErrors({});
    setSuccess("Talebiniz güvenli şekilde alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecek.");
  }

  return (
    <section className="section-pad bg-mist" id="iletisim">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">İletişim</p>
            <h2 className="section-title">Operasyonunuz için teklif alın</h2>
            <p className="section-copy">
              Lokasyon, hizmet saatleri ve araç yoğunluğunu paylaşın; size en uygun ekip modelini
              planlayalım.
            </p>

            <div className="mt-8 rounded-lg bg-ink p-6 text-white shadow-luxury">
              <p className="text-sm font-semibold text-gold">Premium Vale</p>
              <p className="mt-3 text-2xl font-semibold">+90 212 000 00 00</p>
              <p className="mt-2 text-sm text-slate-300">teklif@premiumvale.com</p>
              <p className="mt-6 text-sm leading-6 text-slate-300">
                İstanbul ve çevre illerde restoran, otel, etkinlik ve kurumsal tesis operasyonları.
              </p>
            </div>
          </div>

          <form
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-luxury sm:p-8"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="fullName">
                  Ad Soyad
                </label>
                <input
                  aria-invalid={Boolean(errors.fullName)}
                  className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                  id="fullName"
                  name="fullName"
                  onChange={(event) => updateField("fullName", event.target.value)}
                  type="text"
                  value={values.fullName}
                />
                {errors.fullName ? <p className="mt-2 text-sm text-red-600">{errors.fullName}</p> : null}
              </div>

              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="phone">
                  Telefon
                </label>
                <input
                  aria-invalid={Boolean(errors.phone)}
                  className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                  id="phone"
                  inputMode="tel"
                  name="phone"
                  onChange={(event) => updateField("phone", event.target.value)}
                  type="tel"
                  value={values.phone}
                />
                {errors.phone ? <p className="mt-2 text-sm text-red-600">{errors.phone}</p> : null}
              </div>

              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="email">
                  E-posta
                </label>
                <input
                  aria-invalid={Boolean(errors.email)}
                  className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                  id="email"
                  name="email"
                  onChange={(event) => updateField("email", event.target.value)}
                  type="email"
                  value={values.email}
                />
                {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
              </div>

              <div>
                <label className="text-sm font-semibold text-ink" htmlFor="serviceType">
                  Hizmet türü
                </label>
                <select
                  aria-invalid={Boolean(errors.serviceType)}
                  className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                  id="serviceType"
                  name="serviceType"
                  onChange={(event) => updateField("serviceType", event.target.value as ServiceType | "")}
                  value={values.serviceType}
                >
                  <option value="">Seçiniz</option>
                  <option value="restoran">Restoran vale hizmeti</option>
                  <option value="otel">Otel vale hizmeti</option>
                  <option value="etkinlik">Etkinlik vale hizmeti</option>
                  <option value="kurumsal">Kurumsal otopark yönetimi</option>
                </select>
                {errors.serviceType ? <p className="mt-2 text-sm text-red-600">{errors.serviceType}</p> : null}
              </div>
            </div>

            <div className="mt-5">
              <label className="text-sm font-semibold text-ink" htmlFor="message">
                Mesaj
              </label>
              <textarea
                aria-invalid={Boolean(errors.message)}
                className="mt-2 min-h-36 w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
                id="message"
                name="message"
                onChange={(event) => updateField("message", event.target.value)}
                value={values.message}
              />
              {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
            </div>

            {success ? (
              <p className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {success}
              </p>
            ) : null}

            <button className="gold-button mt-6 w-full" type="submit">
              Teklif Talebi Gönder
              <Send aria-hidden="true" className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
