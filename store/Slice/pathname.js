import { createSlice } from "@reduxjs/toolkit";

const pathnameSlice = createSlice({
    name: "pathname",
    initialState:{pathname:window.location.pathname},
        
    reducers:{
        setpathname:function(state,actions){
            state.pathname=actions.payload
        }
    }

})
// const vvSlice = createSlice({
//     name: "vv",
//     initialState:{vv:"a"},
        
//     reducers:{
//         setvv:function(state,actions){
//             state.vv="actions.payload"
//         }
//     }

// })
export const {setpathname}=pathnameSlice.actions

export default pathnameSlice.reducer 