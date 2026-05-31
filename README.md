# Premium Vale Hizmeti

Next.js App Router, React, TypeScript ve Tailwind CSS ile hazırlanmış premium vale / otopark hizmeti web sitesi.

## Teknolojiler

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React Icons
- SEO metadata
- Güvenli form validasyonu
- Responsive tasarım

## Yerelde Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda aç:

```text
http://localhost:3000
```

## Vercel Deploy

1. Projeyi GitHub repository olarak yükle.
2. Vercel panelinde `Add New Project` seç.
3. GitHub repository'yi import et.
4. Framework Preset değerinin `Next.js` olduğundan emin ol.
5. Root Directory alanı repository kökü olmalı. `package.json` hangi klasördeyse Vercel root olarak onu seçmelidir.
6. Build Command boş bırakılabilir veya `npm run build` olabilir.
7. Install Command boş bırakılabilir veya `npm install` olabilir.
8. Environment Variables bölümüne yayın domainini ekle:

```text
NEXT_PUBLIC_SITE_URL=https://senin-vercel-domainin.vercel.app
```

9. `Deploy` butonuna bas.

## Vercel Sorun Giderme

Build loglarında sadece `Build Completed in /vercel/output` görünüyor ama `npm install` ve `npm run build` çalışmıyorsa Vercel projeyi Next.js olarak algılamamış olabilir.

Kontrol et:

- GitHub repository kökünde `package.json` var mı?
- Vercel `Root Directory` ayarı `package.json` bulunan klasörü gösteriyor mu?
- Vercel `Framework Preset` değeri `Next.js` mi?
- Build Command `npm run build` olarak ayarlı mı?
- Output Directory alanı boş mu? Next.js projelerinde manuel `out`, `dist` veya `.next` yazma.

## Komutlar

```bash
npm run lint
npm run build
npm run start
```
# vale-website
