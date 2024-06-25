import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[]
}

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCartAction: (state,action) => {
        console.log('xử lý thêm giỏ hàng')
    }
  }
});

export const {} = cartReducer.actions

export default cartReducer.reducer