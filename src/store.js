import { configureStore } from "@reduxjs/toolkit";
import { kinkApi } from "./redux/api/api";
import cartReducer from "./redux/Cart/Cart";
import loginReducer from "./redux/login/login"

export const store = configureStore({
    reducer:{
        [kinkApi.reducerPath]: kinkApi.reducer,
        cart: cartReducer.reducer,
        login: loginReducer.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinkApi.middleware),
})