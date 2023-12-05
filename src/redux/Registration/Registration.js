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
    setEmailField: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setLastNameField: (state, action) => {
      state.lastname = action.payload;
    },
    setFirstnameField: (state, action) => {
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
  setEmailField,
  setPassword,
  setFirstnameField,
  setLastNameField,
  setError,
  setLoading,
} = registrationSlice.actions;

export const selectRegistration = (state) => state.registration;

export default registrationSlice.reducer;
