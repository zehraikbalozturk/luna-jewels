import Link from "next/link";


type Props = {
slug: string;
name: string;
price: number;
currency?: string;
image: string;
};


export default function ProductCard({ slug, name, price, currency = "₺", image }: Props) {
return (
<Link href={`/product/${slug}`} className="group">
<div className="rounded-2xl overflow-hidden border bg-white">
<div className="aspect-square overflow-hidden">
<img src={image} alt={name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/>
</div>
<div className="p-4">
<h3 className="text-sm font-medium line-clamp-1">{name}</h3>
<p className="mt-1 text-sm text-gray-600">{currency}{price.toLocaleString("tr-TR")}</p>
</div>
</div>
</Link>
);
}