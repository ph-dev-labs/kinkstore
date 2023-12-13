import { configureStore } from "@reduxjs/toolkit";
import { kinkApi } from "./redux/api/api";
import cartReducer, {initializeCart} from "./redux/Cart/Cart";
import loginReducer from "./redux/login/login";
import registrationReducer from "./redux/Registration/Registration";

const rootReducer = {
  [kinkApi.reducerPath]: kinkApi.reducer,
  cart: cartReducer,
  login: loginReducer,
  registration: registrationReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinkApi.middleware),
});


store.dispatch(initializeCart());