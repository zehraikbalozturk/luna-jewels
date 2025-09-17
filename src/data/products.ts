// src/data/products.ts

// 1) Kategori anahtarlarımız (görünen isim değil, sistem anahtarı)
export type Category =
  | "gumus kolye"
  | "altin kolye"
  | "altin bileklik"
  | "gumus bileklik"
  | "kupe"
  | "yuzuk"
  | "piercing"
  | "ozel";

// 2) Kolay düzenleme formatı
type ProductInput = {
  name: string;
  price: number;   // ₺
  image: string;   // "/products/...jpg" veya "https://..."
  category: Category;
  badge?: string;
};

// 3) Türkçe karakterli isimleri URL-dostu sluga çevir
const TR_MAP: Record<string, string> = {
  Ç: "c", Ö: "o", Ş: "s", İ: "i", I: "i", Ü: "u", Ğ: "g",
  ç: "c", ö: "o", ş: "s", ı: "i", ü: "u", ğ: "g",
};
const slugify = (s: string) =>
  s
    .trim()
    .replace(/[ÇÖŞİIÜĞçöşıüğ]/g, (c) => TR_MAP[c] || c)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// 4) ÜRÜNLER — burada rahatça ekle/çıkar/düzenle
const INPUT: ProductInput[] = [
  
  { name: "İnci Küpe", price: 100, image: "/products/kupe.jpg", category: "kupe" },
  { name: "Gümüş Renk Asansör Zincir Kelebek Zirkon Taşlı 316 L. Çelik Kararmaz Çelik Bileklik", price: 125, image: "/products/bileklik.jpg", category: "gumus bileklik" },
  { name: "Kararmaz Solmaz Çelik Piercing", price: 125, image: "/products/piercing.jpg", category: "piercing" },
  { name: "Gümüş Renk Sf Zincirde Mavi Kalp Gezegen Vip Solmaz Kararmaz Çelik Kolye", price: 200, image: "/products/kolye.jpg", category: "gumus kolye", badge: "Yeni" },
  { name: "Gümüş Renk Boş Düğüm Kalp Model Kadın Bijuteri Kolye", price: 125, image: "/products/kolye2.jpg", category: "gumus kolye" },
  { name: "Altın Renk Boş Düğüm Kalp Model Kadın Bijuteri Kolye", price: 125, image: "/products/kolye3.jpg", category: "altin kolye" },
  { name: "Kadın Katlı Zincir Kolye pullu", price: 200, image: "/products/kolye4.jpg", category: "altin kolye" },
  { name: "Kadın Katlı Zincir Kolye Pullu Gümüş Renk", price: 200, image: "/products/kolye5.jpg", category: "gumus kolye" },
  { name: "Altın Renk Rodyumlu Renkli Zirkon Taşlı Kar Tanesi Kolye Altın Renk Çelik Kolye", price: 200, image: "/products/kolye6.jpg", category: "altin kolye" },
  { name: "Gümüş Renk Mikail Meleği Kanatlı Beyaz Taşlı Zirkon Çelik Kolye", price:200, image: "/products/kolye7.jpg", category: "gumus kolye" },
  { name: "Altın Renk Mikail Meleği Kanatlı Beyaz Taşlı Zirkon Çelik Kolye", price:200, image: "/products/kolye8.jpg", category: "altin kolye" },
  { name: "Altın Renk Sf Zincir 4 Kalp Model Vip Solmaz Kararmaz Çelik Kolye", price:200, image: "/products/kolye9.jpg", category: "altin kolye" },
  { name: "Gümüş Renk Kararmaz Paslanmaz Çelik Dorika Zincir Çelik Kolye", price:150, image: "/products/kolye10.jpg", category: "gumus kolye" },
  { name: "Gümüş Renk Deniz Kabuğu Inci Detaylı Minimal Zirkon Taşlı Zincir Paslanmaz Çelik Kolye", price:200, image: "/products/kolye11.jpg", category: "gumus kolye" },
  { name: "Altın Renk Deniz Kabuğu Inci Detaylı Minimal Zirkon Taşlı Zincir Paslanmaz Çelik Kolye", price:200, image: "/products/kolye12.jpg", category: "altin kolye" },
  { name: "Gümüş Renk Mor Lotus Çiçeği Kolye Paslanmaz Çelik Kolye", price:200, image: "/products/kolye13.jpg", category: "gumus kolye" },
  { name: "Altın Renk Opal Yıldız Gezegen Satürn Çelik Kolye", price:200, image: "/products/kolye14.jpg", category: "altin kolye" },
  { name: "Gümüş Renk Opal Yıldız Gezegen Satürn Çelik Kolye", price:200, image: "/products/kolye15.jpg", category: "gumus kolye" },
  
];

// 5) Slug üret + aynı isim varsa otomatik -2, -3 ekle (çakışma önleme)
const base = INPUT.map((p) => ({ ...p, slug: slugify(p.name) }));
const seen = new Map<string, number>();
export const PRODUCTS = base.map((p) => {
  const n = (seen.get(p.slug) ?? 0) + 1;
  seen.set(p.slug, n);
  return n === 1 ? p : { ...p, slug: `${p.slug}-${n}` };
});

// 6) Tip
export type Product = (typeof PRODUCTS)[number];
