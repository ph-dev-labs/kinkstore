import { createSlice } from "@reduxjs/toolkit";
const Cart_KEY = "CART_ITEM";

const getStoredCartItems = () => {
  const storedCartItems = localStorage.getItem("CART_ITEM");
  return storedCartItems ? Object.values(JSON.parse(storedCartItems)) : [];
};

const initialState = {
  cartItems: getStoredCartItems(),
  totalPrice: 0,
};

const calculateTotalPrice = (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.cartItems);
      localStorage.setItem(
        Cart_KEY,
        JSON.stringify({ cartItems: state.cartItems, totalPrice: state.totalPrice })
      ); // Store cartItems in localStorage
    },
    updateCartItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        state.totalPrice = calculateTotalPrice(state.cartItems);
        localStorage.setItem(
          Cart_KEY,
          JSON.stringify({ cartItems: state.cartItems, totalPrice: state.totalPrice })
        ); // Update cartItems in localStorage
      }
    },
    removeItemFromCart(state, action) {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemIdToRemove
      );
      state.totalPrice = calculateTotalPrice(state.cartItems);
      localStorage.setItem(
        Cart_KEY,
        JSON.stringify({ cartItems: state.cartItems, totalPrice: state.totalPrice })
      ); // Update cartItems in localStorage
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.removeItem("CART_ITEM"); // Clear cartItems from localStorage
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