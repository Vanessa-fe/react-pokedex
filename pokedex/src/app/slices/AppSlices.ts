import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitiaState } from "../../utils/Types";

const initialState: AppTypeInitiaState = {
    toasts: [],
};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setToast: (state, action) => {
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
        },
        clearToasts: (state) => {
            state.toasts = [];
        }
    },
});

export const {setToast, clearToasts } = AppSlice.actions;