import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchOrder=createAsyncThunk(
    "Order/fetch",async ()=>{
        let userId=localStorage.getItem('userId').replaceAll('"',"")
        // let userId="651cac675238c660afc16f53"

        const reaponse=await axiosInstance.get(`/order/getByUserId/${userId}`)
        // console.log(reaponse.data.data)
        return  reaponse.data.data;
    }
)

export const addOrder=createAsyncThunk(
    "Order/add",async ()=>{
        let userId=localStorage.getItem('userId').replaceAll('"',"")
        // let userId="651cac675238c660afc16f53"

        const reaponse=await axiosInstance.post(`/order/${userId}/addNewOrder`)
        return  reaponse.data.data;
    }
)

export const cancelOrder = createAsyncThunk(
    "Order/cancelOrder",
    async ( orderId) => {
      const response = await axiosInstance.patch(
        `/order/${orderId}/cancel` );   
      return response.data.data;  
    }

  );



const OrderSlice =createSlice({

    name:"Order",
    initialState:{
        data:[],
        status:null
    },
    extraReducers:{
        [fetchOrder.fulfilled ]:(state , {payload})=>{
            state.data=payload
            state.status='success'
        },
        [fetchOrder.pending ]:(state )=>{
            state.status='loading'

        },
        [fetchOrder.rejected ]:(state  )=>{
            state.status='failed'

        },
    }


})

export default OrderSlice.reducer