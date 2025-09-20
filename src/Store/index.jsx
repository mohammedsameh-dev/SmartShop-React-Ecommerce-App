import { create } from "zustand";
export const domain = "https://fakestoreapi.com";

export const userModalIndex = create((set) => ({
  value: false,
  openModal: () => set({ value: true }),
  closeModal: () => set({ value: false }),
}));
export const useUserStore = create((set) => ({
  users: [],
  setUsers: (data) => set({ users: data }),
}));

export const LoaderIndex = create((set) => ({
  value: true,
  openLoader: () => set({ value: true }),
  closeLoader: () => set({ value: false }),
}));

export const useCartItem = create((set, get) => ({
  item: JSON.parse(localStorage.getItem("cartItems")) || [],
  AddItemToCart: (product) => {
    const cart = get().item;
    const existing = cart.find((el) => el.id === product.id);
    if (existing) {
      const updated = cart.map((el) =>
        el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      set({ item: updated });
      localStorage.setItem("cartItems", JSON.stringify(updated));
    } else {
      const newItem = { ...product, quantity: 1 };
      const updated = [...cart, newItem];
      set({ item: updated });
      localStorage.setItem("cartItems", JSON.stringify(updated));
    }
  },
  removeItemFromCart: (id) => {
    const cart = get().item;
    const existing = cart.find((el) => el.id === id);
    let updated = [];

    if (existing && existing.quantity > 1) {
      updated = cart.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      );
    } else {
      updated = cart.filter((el) => el.id !== id);
    }

    set({ item: updated });
    localStorage.setItem("cartItems", JSON.stringify(updated));
  },
  clearCart: () => {
    set({ item: [] });
    localStorage.removeItem("cartItems");
  },
}));

export const useAuthStore = create((set) => ({
  isAuth: !!localStorage.getItem("authToken"),
  login: (token) => {
    localStorage.setItem("authToken", token);
    set({ isAuth: true });
  },
  logout: () => {
    localStorage.removeItem("authToken");
    set({ isAuth: false });
  },
}));
