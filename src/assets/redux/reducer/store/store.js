import { configureStore, createReducer } from "@reduxjs/toolkit";
import cart from "../counter"
export const store = configureStore({
    reducer: {
        cart: cart
    }
})