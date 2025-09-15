import ProductCard from "@/components/ProductCard";
import { site } from "@/lib/site";


const demo = [
{ slug: "zarif-altin-kolye", name: "Zarif Altın Kolye", price: 1899, image: "/demo/kolye.jpg" },
{ slug: "inci-kupe", name: "İnci Küpe", price: 799, image: "/demo/kupe.jpg" },
{ slug: "minimal-bileklik", name: "Minimal Bileklik", price: 499, image: "/demo/bileklik.jpg" },
];


export default function Home() {
return (
<div className="space-y-8">
<section className="rounded-3xl border p-8 brand-gradient">
<h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{site.name}</h1>
<p className="mt-2 text-gray-700 max-w-prose">{site.slogan}. El işçiliğiyle hazırlanmış modern takılar.</p>
<div className="mt-4 flex gap-3">
<a href="/shop" className="px-4 py-2 rounded-xl bg-[color:var(--brand-ink)] text-white text-sm">Koleksiyonu Keşfet</a>
<a href={site.instagram} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl border text-sm">Instagram</a>
</div>
</section>


<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold">Öne Çıkanlar</h2>
<a href="/shop" className="text-sm text-gray-700 hover:underline">Tümünü gör</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
{demo.map(p => (
<ProductCard key={p.slug} {...p} />
))}
</div>
</section>
</div>
);
}

