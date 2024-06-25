import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/home/cartReducer";


export const store = configureStore({
    reducer: {
        number: (state = 1) => state,
        cartReducer
    }
})