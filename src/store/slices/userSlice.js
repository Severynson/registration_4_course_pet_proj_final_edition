import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    surname: null,
    email: null,
    password: null,
    instagram: null,
    phone: null,
    aboutYourself: null,
    acceptionStatus: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn(state, action) {
            // console.log(action.payload);
            // state = action.payload; 
            // console.log(state);
            state.name = action.payload.name;
        },
        logOut(state) {
            // state = initialState;
        },
    }
});

export const userActions = userSlice.actions;