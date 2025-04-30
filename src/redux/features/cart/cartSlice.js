import {createSlice } from '@reduxjs/toolkit'


const initialState={
    cartItems:JSON.parse(localStorage.getItem('cartItems')) || [],
}
const updateLocalStorage=(cartItems)=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            
            const existingBook = state.cartItems.find(item=>item._id===action.payload._id)
            if(!existingBook){
                
                state.cartItems.push(action.payload)
                updateLocalStorage(state.cartItems)
            }

        },
        
    removeFromCart:(state,action)=>{
        state.cartItems = state.cartItems.filter(item=>item._id!==action.payload.id)
        updateLocalStorage(state.cartItems)
        

    },
    clearCart:(state)=>{
        console.log('inside cleaing cart')
        state.cartItems=[]
        localStorage.removeItem('cartItems')
    }
    },

})

export default cartSlice.reducer
export const {addToCart,removeFromCart,clearCart}=cartSlice.actions