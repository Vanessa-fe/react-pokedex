import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitiaState } from "../../utils/Types";

const initialState:AppTypeInitiaState = {};

export const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
});

export const {} = AppSlice.actions;