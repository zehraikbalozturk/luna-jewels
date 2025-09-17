import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const CATS = [
  { key: "", label: "Tümü" },

  // Kolye grubu (altın + gümüş)
  { key: "kolye", label: "Kolye (Altın + Gümüş)" },
  { key: "altin kolye", label: "Altın Kolye" },
  { key: "gumus kolye", label: "Gümüş Kolye" },

  // Bileklik grubu (altın + gümüş + genel)
  { key: "bileklik", label: "Bileklik (Altın + Gümüş + Genel)" },
  { key: "altin bileklik", label: "Altın Bileklik" },
  { key: "gumus bileklik", label: "Gümüş Bileklik" },

  { key: "kupe", label: "Küpe" },
  { key: "yuzuk", label: "Yüzük" },
  { key: "piercing", label: "Piercing" },
  { key: "ozel", label: "Kişiye Özel" },
] as const;

type Params = { cat?: string; sort?: string };

// URL'de "kolye" ve "bileklik" grupları alt kategorilere genişler
const GROUPS: Record<string, string[]> = {
  kolye: ["altin kolye", "gumus kolye"],
  bileklik: ["altin bileklik", "gumus bileklik", "bileklik"],
};

function buildHref(current: Params, next: Partial<Params>) {
  const p = new URLSearchParams();
  const cat = (next.cat ?? current.cat ?? "").toString();
  const sort = (next.sort ?? current.sort ?? "").toString();
  if (cat) p.set("cat", cat);
  if (sort) p.set("sort", sort);
  const q = p.toString();
  return q ? `/shop?${q}` : "/shop";
}

// Next 15: searchParams Promise -> await edilmeli
export default async function Shop({ searchParams }: { searchParams: Promise<Params> }) {
  const sp = await searchParams;
  const cat = (sp.cat ?? "").toString();
  const sort = (sp.sort ?? "").toString();

  // 1) Kategori filtresi
  let list = PRODUCTS;
  if (cat) {
    if (GROUPS[cat]) {
      list = list.filter((p) => GROUPS[cat].includes(p.category as string));
    } else {
      list = list.filter((p) => p.category === cat);
    }
  }

  // 2) Sıralama
  if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);

  const activeCat = cat || "";

  return (
    <div className="space-y-6 section">
      <div className="pt-2">
        <h1 className="text-2xl font-semibold">Koleksiyon</h1>
        <p className="text-sm text-gray-600">Sevdiklerin veya kendin için şık parçalar.</p>
      </div>

      {/* Filtre & Sıralama */}
      <div className="flex flex-wrap items-center gap-2">
        {CATS.map((c) => (
          <Link
            key={c.key}
            href={buildHref({ cat, sort }, { cat: c.key })}
            className={`px-3 py-1.5 rounded-full border text-sm ${
              activeCat === c.key
                ? "bg-[color:var(--brand-rose)] border-[color:var(--brand-gold)]"
                : "hover:bg-gray-50"
            }`}
          >
            {c.label}
          </Link>
        ))}
        <span className="mx-2 h-5 w-px bg-gray-200" />
        <Link
          href={buildHref({ cat, sort }, { sort: "price-asc" })}
          className={`text-sm px-3 py-1.5 rounded-full border ${
            sort === "price-asc" ? "bg-gray-900 text-white" : "hover:bg-gray-50"
          }`}
        >
          Fiyat ↑
        </Link>
        <Link
          href={buildHref({ cat, sort }, { sort: "price-desc" })}
          className={`text-sm px-3 py-1.5 rounded-full border ${
            sort === "price-desc" ? "bg-gray-900 text-white" : "hover:bg-gray-50"
          }`}
        >
          Fiyat ↓
        </Link>
      </div>

      {/* Grid */}
      {list.length === 0 ? (
        <div className="py-16 text-center text-gray-500">Bu kategori için ürün eklenmemiş.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((p) => (
            <ProductCard key={p.slug} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}
