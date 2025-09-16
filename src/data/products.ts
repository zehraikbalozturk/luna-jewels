// src/data/products.ts

// 1) Kategori tiplerimiz — şimdilik 5 temel kategori:
export type Category = "kolye" | "bileklik" | "kupe" | "yuzuk" | "piercing";

// 2) Düzenlemesi kolay form: SLUG YOK! Sadece adı, fiyatı, görseli, kategori.
type ProductInput = {
  name: string;
  price: number;         // ₺ fiyat (sayı olarak)
  image: string;         // /public altına koyduğun yol veya https://...
  category: Category;
  badge?: string;        // "Yeni", "Favori" gibi isteğe bağlı etiket
};

// 3) Türkçe karakterleri düzgün URL'e çeviren küçük yardımcı (slugify)
const TR_MAP: Record<string, string> = {
  Ç: "c", Ö: "o", Ş: "s", İ: "i", I: "i", Ü: "u", Ğ: "g",
  ç: "c", ö: "o", ş: "s", ı: "i", ü: "u", ğ: "g",
};
const slugify = (s: string) =>
  s.replace(/[ÇÖŞİIÜĞçöşıüğ]/g, (c) => TR_MAP[c] || c)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// 4) BURAYI DÜZENLEYECEKSİN: Ürünleri buraya tek tek ekliyoruz.
const INPUT: ProductInput[] = [
  // ÖRNEKLER — silip kendi ürünlerini yaz
  { name: "Zarif Altın Kolye", price: 1899, image: "/products/kolye.jpg", category: "kolye", badge: "Yeni" },
  { name: "İnci Küpe",         price:  799, image: "/products/kupe.jpg",   category: "kupe" },
  { name: "Minimal Bileklik",  price:  499, image: "/products/bileklik.jpg", category: "bileklik" },
  { name: "Tek Taş Yüzük",     price: 2199, image: "/products/yuzuk.jpg",  category: "yuzuk", badge: "Favori" },
  { name: "Minimal Halhal",    price:  329, image: "/products/halhal.jpg", category: "piercing" },
];

// 5) Gerçek ürün listemiz — SLUG’u isimden otomatik üretir.
export const PRODUCTS = INPUT.map((p) => ({ ...p, slug: slugify(p.name) }));

// 6) Tip — başka yerlerde kullanmak istersen:
export type Product = (typeof PRODUCTS)[number];
