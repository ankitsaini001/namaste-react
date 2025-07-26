import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers:{
        addItems: (state,action) => {
            // vanilla(older) Redux => DON'T MUTATE STATE
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux toolkit
            // We have to mutate the state
            state.items.push(action.payload);
        },
        removeItems: (state,action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter((items)=>items.card.info.id !== itemIdToRemove)
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
})

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;