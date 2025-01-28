
//packages
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

//utilites
import { api } from "@/app/utili/axiosConfig";

//types
import { Products, ProductType } from "@/app/types/sliceType";

const initialState : Products = {
   isLoading : false,
   templates : null, 
   error : null
}

//async thunk to get products
export const getProduct = createAsyncThunk("products/getproduct",
    async() =>{
        try {
            const res = await api.get("/template/all-template");            
            return res.data.payload.products;
        } catch (error:any) {
             console.log(error.response?.data?.message);
             throw error
        }
    }
);

//create product slice
const productSlice = createSlice({
    name : "templates",
    initialState,
    reducers : {},
    extraReducers(builder) {
      builder
       .addCase(getProduct.pending,(state)=>{
         state.isLoading = true;
       })
       .addCase(getProduct.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.templates = action.payload as ProductType[];
      })

      .addCase(getProduct.rejected,(state,action)=>{
        state.isLoading = false;
        state.templates = null;
        state.error = action.payload as string;
      })

    }
  
})

export default productSlice.reducer; 