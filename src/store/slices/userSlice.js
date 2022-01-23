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
            state.name = action.payload.name;
            state.surname = action.payload.surname;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.instagram = action.payload.instagram;
            state.phone = action.payload.phone;
            state.aboutYourself = action.payload.aboutYourself;
            state.acceptionStatus = action.payload.acceptionStatus;
        },
        logOut(state) {
            state.name = null;
            state.surname = null;
            state.email = null;
            state.password = null;
            state.instagram = null;
            state.phone = null;
            state.aboutYourself = null;
            state.acceptionStatus = null;
        },
    }
});

export const userActions = userSlice.actions;