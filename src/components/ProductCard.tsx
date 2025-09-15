import Link from "next/link";

type Props = {
  slug: string; name: string; price: number;
  currency?: string; image: string; badge?: string;
};

export default function ProductCard({ slug, name, price, currency="₺", image, badge="Yeni" }: Props) {
  return (
    <Link href={`/product/${slug}`} className="group">
      <div className="rounded-2xl overflow-hidden border bg-white/90 hover:bg-white transition-all hover:shadow-xl">
        <div className="relative aspect-square overflow-hidden">
          <img src={image} alt={name}
               className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent
                          opacity-0 group-hover:opacity-100 transition" />
          <span className="absolute left-3 top-3 text-[11px] px-2 py-0.5 rounded-full
                           bg-[color:var(--brand-rose)] text-[color:var(--brand-ink)] border">{badge}</span>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium line-clamp-1">{name}</h3>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[15px] font-semibold text-[color:var(--brand-ink)]">
              {currency}{price.toLocaleString("tr-TR")}
            </p>
            <span className="text-xs text-gray-500 group-hover:text-gray-700 transition">Detay</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
