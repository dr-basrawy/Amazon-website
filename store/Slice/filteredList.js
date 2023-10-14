import { createSlice } from "@reduxjs/toolkit";

const filteredListSlice=createSlice({
    name:'filteredList',
    initialState:{
        filteredList:[],
    },
    reducers:{
        getFilteredList:function(state,action){
            state.filteredList=action.payload;
        }
    }
})
export let {getFilteredList}=filteredListSlice.actions
export default filteredListSlice.reducer;