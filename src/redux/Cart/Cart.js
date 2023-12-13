import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "CART_ITEM";

const getStoredCartItems = () => {
  try {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (parsedCart.cartItems) {
        return parsedCart.cartItems;
      }
    }
    return [];
  } catch (error) {
    console.error("Error getting cart items from localStorage:", error);
    return [];
  }
};

const saveCartToLocalStorage = (cartItems, totalPrice) => {
  try {
    const parsedCart = {
      cartItems,
      totalPrice
    };

    localStorage.setItem(CART_KEY, JSON.stringify(parsedCart));
  } catch (error) {
    console.error("Error saving cart items to localStorage:", error);
  }
};

const calculateTotalPrice = (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

const initialState = {
  cartItems: getStoredCartItems(),
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1,
        };

        state.cartItems = updatedCartItems;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.cartItems);
      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
    updateCartItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const itemToUpdateIndex = state.cartItems.findIndex(
        (item) => item.id === itemId
      );

      if (itemToUpdateIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[itemToUpdateIndex] = {
          ...updatedCartItems[itemToUpdateIndex],
          quantity: quantity,
        };

        state.cartItems = updatedCartItems;
        state.totalPrice = calculateTotalPrice(state.cartItems);
        saveCartToLocalStorage(state.cartItems, state.totalPrice);
      }
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );

      state.totalPrice = calculateTotalPrice(state.cartItems);
      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.removeItem(CART_KEY);
    },
  },
});

export const {
  addItemToCart,
  updateCartItemQuantity,
  removeItemFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
