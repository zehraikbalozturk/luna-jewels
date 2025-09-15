"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

const CATEGORIES = [
{ label: "Yeni Gelenler", href: "/shop?sort=new" },
{ label: "Kolye", href: "/shop?cat=kolye" },
{ label: "Bileklik", href: "/shop?cat=bileklik" },
{ label: "Küpe", href: "/shop?cat=kupe" },
{ label: "Yüzük", href: "/shop?cat=yuzuk" },
{ label: "Halhal", href: "/shop?cat=halhal" },
{ label: "Kişiye Özel", href: "/shop?cat=ozel" },
];

export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<Link href="/" className="font-semibold tracking-tight text-xl">
{site.name}
</Link>
<nav className="hidden md:flex items-center gap-6">
{CATEGORIES.map((c) => (
<Link key={c.href} href={c.href} className="text-sm text-gray-700 hover:text-gray-900 relative group">
{c.label}
<span className="absolute left-0 -bottom-1 h-px w-0 bg-gray-900 transition-all group-hover:w-full" />
</Link>
))}
</nav>
</div>


<div className="flex items-center gap-3">
  <a
href={site.instagram}
target="_blank"
rel="noopener noreferrer"
aria-label="Instagram"
className="p-2 rounded-full border hover:shadow-sm active:scale-95 transition"
>
<Instagram className="h-5 w-5" />
</a>
<button aria-label="Sepet" className="relative p-2 rounded-full border hover:shadow-sm active:scale-95 transition" onClick={() => {
const el = document.getElementById("cart-drawer");
el?.dispatchEvent(new CustomEvent("open-cart"));
}}>
<ShoppingCart className="h-5 w-5" />
<span className="absolute -top-1 -right-1 text-[10px] bg-black text-white rounded-full px-1">0</span>
</button>
<button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menüyü Aç/Kapat">
{open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
</button>
</div>
</div>
</div>


<AnimatePresence>
{open && (
<motion.nav
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
className="md:hidden overflow-hidden border-t bg-white"
>
<div className="px-4 py-3 grid gap-2">
{CATEGORIES.map((c) => (
<Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="py-2 text-gray-800">
{c.label}
</Link>
))}
</div>
</motion.nav>
)}
</AnimatePresence>
</header>
);
}