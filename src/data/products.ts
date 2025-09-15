export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: "kolye" | "bileklik" | "kupe" | "yuzuk" | "halhal";
  badge?: string;
};

export const PRODUCTS: Product[] = [
  { slug: "zarif-altin-kolye", name: "Zarif Altın Kolye", price: 1899, image: "/demo/kolye.jpg", category: "kolye", badge: "Yeni" },
  { slug: "inci-kolye", name: "İnci Kolye", price: 1299, image: "/demo/kolye.jpg", category: "kolye" },
  { slug: "kalp-kolye", name: "Kalp Kolye", price: 999, image: "/demo/kolye.jpg", category: "kolye" },

  { slug: "minimal-bileklik", name: "Minimal Bileklik", price: 499, image: "/demo/bileklik.jpg", category: "bileklik" },
  { slug: "baget-bileklik", name: "Baget Bileklik", price: 649, image: "/demo/bileklik.jpg", category: "bileklik" },
  { slug: "cift-sirali-bileklik", name: "Çift Sıralı Bileklik", price: 729, image: "/demo/bileklik.jpg", category: "bileklik" },

  { slug: "inci-kupe", name: "İnci Küpe", price: 799, image: "/demo/kupe.jpg", category: "kupe" },
  { slug: "halka-kupe", name: "Halka Küpe", price: 559, image: "/demo/kupe.jpg", category: "kupe" },
  { slug: "baget-kupe", name: "Baget Küpe", price: 619, image: "/demo/kupe.jpg", category: "kupe" },

  { slug: "tek-tas", name: "Tek Taş Yüzük", price: 2199, image: "/demo/yuzuk.jpg", category: "yuzuk", badge: "Favori" },
  { slug: "baget-yuzuk", name: "Baget Yüzük", price: 1749, image: "/demo/yuzuk.jpg", category: "yuzuk" },
  { slug: "minimal-halhal", name: "Minimal Halhal", price: 329, image: "/demo/halhal.jpg", category: "halhal" },
];
