import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      // Update totalPrice when adding an item
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    // Other reducers...
    incrementCartItem(state, action) {
      const idToIncrement = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.id === idToIncrement ? { ...item, quantity: item.quantity + 1 } : item
      );

      // Update totalPrice when incrementing an item
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    decrementCartItem(state, action) {
      const idToDecrement = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.id === idToDecrement && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      // Update totalPrice when decrementing an item
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeItemFromCart(state, action) {
      const idToRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);

      // Update totalPrice when removing an item
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    deleteCartItem(state, action) {
      const idToDelete = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== idToDelete);

      // Update totalPrice when deleting an item
      state.totalPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
