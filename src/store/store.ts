import { create } from "zustand";
import { ICartItem } from "../types";
import { persist, createJSONStorage } from "zustand/middleware";

interface IGlobalStore {
  cart: ICartItem[];
  addItemToCart: (cartItem: ICartItem) => void;
}

const useGlobalState = create<IGlobalStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addItemToCart: (cartItem) => {
        const { cart } = get();
        let cartItems: ICartItem[] = [];
        let updateCartItem: ICartItem | null = null;
      },
    }),
    {
      name: "storeapp-production-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useGlobalState;
