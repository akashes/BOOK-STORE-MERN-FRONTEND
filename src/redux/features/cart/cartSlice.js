import {createSlice } from '@reduxjs/toolkit'


const initialState={
    cartItems:[],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            
            const existingBook = state.cartItems.find(item=>item._id===action.payload._id)
            if(!existingBook){
                
                state.cartItems.push(action.payload)
            }

        },
        
    removeFromCart:(state,action)=>{
        state.cartItems = state.cartItems.filter(item=>item._id!==action.payload.id)
        

    },
    clearCart:(state)=>{
        console.log('inside cleaing cart')
        state.cartItems=[]
    }
    },

})

export default cartSlice.reducer
export const {addToCart,removeFromCart,clearCart}=cartSlice.actions