import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn(state, action) {
            state = action.payload; 
        },
        logOut(state) {
            state = initialState;
        },
    }
});

export const userActions = userSlice.actions;