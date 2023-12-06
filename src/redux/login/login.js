import { createSlice } from "@reduxjs/toolkit";

const Auth_KEY = "Auth_token";
const initialState = {
  user: null,
  token: null,
  error: null,
  role: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { email, token, role } = action.payload;
      state.user = email;
      state.token = token;
      state.error = null;
      state.role = role;

      localStorage.setItem(Auth_KEY, token)
      
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.role = null;
      localStorage.removeItem( Auth_KEY)
    },
  },
});

export const { loginFailure, loginSuccess, logout } = loginSlice.actions;
export const selectUser = (state) => state.login.user;
export const selectToken = (state) => state.login.token;

export default loginSlice.reducer;



