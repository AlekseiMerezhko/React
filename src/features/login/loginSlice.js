import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogined: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state) => {
            state.isLogined = true;
        },
        logout: (state) => {
            state.isLogined = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
