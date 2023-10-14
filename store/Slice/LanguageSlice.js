import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:'language',
    initialState:{
        language:'en',
    },
    reducers:{
        getLanguage:function(state,action){
            state.language=action.payload;
        }
    }
})
export let {getLanguage}=languageSlice.actions
export default languageSlice.reducer;