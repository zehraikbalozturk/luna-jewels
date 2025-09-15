import { create } from "zustand";


type Item = { id: string; name: string; price: number; qty: number };


type CartState = {
items: Item[];
add: (item: Item) => void;
remove: (id: string) => void;
clear: () => void;
total: () => number;
};


export const useCart = create<CartState>((set, get) => ({
items: [],
add: (item) => set((s) => {
const exists = s.items.find(i => i.id === item.id);
if (exists) {
return { items: s.items.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i) };
}
return { items: [...s.items, item] };
}),
remove: (id) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),
clear: () => set({ items: [] }),
total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
}));