import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((p) => p.id === product.id);
          if (existing) {
            return {
              items: state.items.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),

      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((p) => p.id !== id) })),

      updateQty: (id, qty) =>
        set((state) => ({
          items: state.items.map((p) =>
            p.id === id ? { ...p, quantity: qty } : p
          ),
        })),
    }),
    { name: "cart-storage" }
  )
);
