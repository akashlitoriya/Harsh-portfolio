import { createSlice } from "@reduxjs/toolkit";
const loaderSlice = createSlice({
    name: 'Loader',
    initialState:{
        loading: false
    },
    reducers:{
        addLoader:(state, action) =>{
            state.loading = true
        },
        removeLoader: (state, action) =>{
            state.loading = false
        }
    }
})
export default loaderSlice.reducer;
export const{addLoader, removeLoader} = loaderSlice.actions;