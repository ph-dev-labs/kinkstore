import { configureStore } from "@reduxjs/toolkit";
import { kinkApi } from "./redux/api/api";

export const store = configureStore({
    reducer:{
        [kinkApi.reducerPath]: kinkApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinkApi.middleware),
})