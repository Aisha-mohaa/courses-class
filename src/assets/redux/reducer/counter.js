import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addCart:(state, action)=>{

            const newData = action.payload;
            state.items.push(newData)
        },
         removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    }
});
export const {addCart, removeCart} = cart.actions;
export default cart.reducer;