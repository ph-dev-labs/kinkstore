import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "CART_ITEM";

const getStoredCartItems = () => {
  try {
    const storedCart = localStorage.getItem(CART_KEY);
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      if (parsedCart.initialState && parsedCart.initialState.cartItems) {
        return parsedCart.initialState.cartItems;
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
    const storedCart = localStorage.getItem(CART_KEY);
    const parsedCart = storedCart ? JSON.parse(storedCart) : {};

    if (!parsedCart.initialState) {
      parsedCart.initialState = { cartItems, totalPrice };
    }

    parsedCart.cartItems = cartItems;
    parsedCart.totalPrice = totalPrice;

    localStorage.setItem(CART_KEY, JSON.stringify(parsedCart));
  } catch (error) {
    console.error("Error saving cart items to localStorage:", error);
  }
};


  const totalPrice = calculateTotalPrice(storedCartItems); // Calculate total price

  dispatch(cartSlice.actions.initializeCart({ cartItems: storedCartItems, totalPrice }));
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
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      state.totalPrice = calculateTotalPrice(state.cartItems);
      saveCartToLocalStorage(state.cartItems, state.totalPrice);
    },
    updateCartItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === itemId);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
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
      saveCartToLocalStorage(state.cartItems, state.totalPrice); // Update localStorage here
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      localStorage.removeItem(CART_KEY);
    },
      
});

export const {
  addItemToCart,
  updateCartItemQuantity,
  removeItemFromCart,
  clearCart,
  
} = cartSlice.actions;

export default cartSlice.reducer;
