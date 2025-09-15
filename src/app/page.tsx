import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";

const demo = [
  { slug: "zarif-altin-kolye", name: "Zarif Altın Kolye", price: 1899, image: "/demo/kolye.jpg" },
  { slug: "inci-kupe", name: "İnci Küpe", price: 799, image: "/demo/kupe.jpg" },
  { slug: "minimal-bileklik", name: "Minimal Bileklik", price: 499, image: "/demo/bileklik.jpg" },
  { slug: "halhal", name: "Minimal Halhal", price: 329, image: "/demo/halhal.jpg", badge: "Favori" },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="section">
        <div className="rounded-3xl border p-8 brand-gradient">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[color:var(--brand-ink)] to-[color:var(--brand-gold)] bg-clip-text text-transparent">
              {site.name}
            </span>
          </h1>
          <p className="mt-2 text-gray-700 max-w-prose">
            Zarafeti her gün takın. El işçiliğiyle hazırlanmış modern takılar.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="/shop" className="px-4 py-2 rounded-xl bg-[color:var(--brand-ink)] text-white text-sm hover:opacity-90 active:scale-[0.99]">
              Koleksiyonu Keşfet
            </a>
            <a href="https://www.instagram.com/luna.__jewels/" target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 rounded-xl border text-sm hover:bg-white">
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* VİTRİN */}
      <section className="section">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Öne Çıkanlar
            <span className="h-[2px] w-12 bg-[color:var(--brand-gold)] inline-block rounded-full"/>
          </h2>
          <a href="/shop" className="text-sm text-gray-700 hover:underline">Tümünü gör</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {demo.map(p => <ProductCard key={p.slug} {...p} />)}
        </div>
      </section>
    </div>
  );
}
