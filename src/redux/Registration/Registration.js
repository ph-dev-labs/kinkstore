import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: "",
  firstname: "",
  lastname: "",
  isLoading: false,
  isError: false,
  email: "",
  errorMessage: "",
};


const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  
});

export const {
  setEmail,
  setPassword,
  setFirstname,
  setLastName,
  setError,
  setLoading,
} = registrationSlice.actions;

export const selectRegistration = (state) => state.registration;

export default registrationSlice.reducer;
