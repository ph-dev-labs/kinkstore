import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: ""
}

const resetPasswordSlice = createSlice({
    name: "resetpassword",
    initialState,

    reducers: {
        setEmailField(state, action){
            state.email = action.payload
        } 
    }

})

export const {setEmailField} = resetPasswordSlice.actions
export default resetPasswordSlice.reducer