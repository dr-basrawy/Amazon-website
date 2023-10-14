import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../src/axiosConfig/instance';

export const fetchreviwes = createAsyncThunk(
    "reviwes/fetch", async (productId) => {
        const reaponse = await axiosInstance.get(`http://localhost:3300/review/product/${productId}`)
        // console.log(reaponse.data.data);
        return reaponse.data.data;
    }
)
export const addreviwes = createAsyncThunk(
    "reviwes/add", async (props) => {
        let userId=localStorage.getItem('userId').replaceAll('"',"")
        const reaponse = await axiosInstance.post(`http://localhost:3300/review/${userId}/${props.prdId}`,props.body)
        // console.log(reaponse.data.data);
        return reaponse.data.data;
    }
)




const reviwesSlice = createSlice({

    name: "reviwes",
    initialState: {
        data: [],
        status: null
    },
    extraReducers: {
        [fetchreviwes.fulfilled]: (state, { payload }) => {
            state.data = payload
            state.status = 'success'
        },
        [fetchreviwes.pending]: (state) => {
            state.status = 'loading'

        },
        [fetchreviwes.rejected]: (state) => {
            state.status = 'failed'

        },
     

    }


})

export default reviwesSlice.reducer