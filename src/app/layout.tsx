import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";


export const metadata: Metadata = {
title: `${site.name} — zarif takılar`,
description: `${site.name}: 🌙Luna Jewels, denizin gizeminden ve ay ışığının zarafetinden ilham aldı. Her parça, kendine ait bir masal taşır. 🌊🐚✨ ${site.slogan}.`,
openGraph: {
title: site.name,
description: `${site.name}: 🌙Luna Jewels, denizin gizeminden ve ay ışığının zarafetinden ilham aldı. Her parça, kendine ait bir masal taşır. 🌊🐚✨`,
type: "website",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="tr">
<body className="min-h-dvh antialiased">
<Navbar />
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">{children}</main>
<div id="cart-drawer" />
</body>
</html>
);
}



