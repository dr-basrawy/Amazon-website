
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../src/axiosConfig/instance';

export const fetchproduct=createAsyncThunk(
    "product/fetch",async ()=>{
        const reaponse=await axiosInstance.get(`/product`)
        return  reaponse.data.data;
    }
)

export const fetchProductById =createAsyncThunk(
    "product/getbyid",async (productId)=>{
        const reaponse=await axiosInstance.get(`/product/${productId}`)
        return await  reaponse.data.data;
    }
)




 const productsSlice =createSlice({

    name:"product",
    initialState:{
        data:{},
        status:null
    },
    extraReducers:{
        [fetchproduct.fulfilled ]:(state , {payload})=>{
            state.data=payload
            state.status='success'
        },
        [fetchproduct.pending ]:(state )=>{
            state.status='loading'

        },
        [fetchproduct.rejected ]:(state  )=>{
            state.status='failed'

        },
         [fetchProductById.fulfilled ]:(state , {payload})=>{
            state.data=payload
            state.status='success'
        },
        [fetchProductById.pending ]:(state )=>{
            state.status='loading'

        },
        [fetchProductById.rejected ]:(state  )=>{
            state.status='failed'

        },
       
       

    }


})

export default productsSlice.reducer
















/////////////////////////////////////

// import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from './../../src/Services/user-auth';

// const productSlice = createSlice({
//     name: "products",
//     initialState: {
//         products: [
//             {
//                 id:1,
//                 img: "https://m.media-amazon.com/images/I/71ZrrTcZkhL._AC_SL1500_.jpg",
//                 title: "Bestway power steel rectangular swimming pool", newPrice: 20049,
//                 discount: '6%',
//                 oldPrice: 21329,
//                 AboutThisItem: [
//                     "Easy to use",
//                     "It provides endless hours of fun and entertainment",
//                     "It provides endless hours of fun and entertainment",
//                     "Perfect for developing kid's imagination and manual dexterity",
//                     "It helps improving motor skills, hand- eye coordination",
//                     "Perfect for developing kid's imagination and manual dexterity"
//                 ],
//             },
//             {
//                 id:2,
//                 img: "https://m.media-amazon.com/images/I/41CoWXycuaL._AC_SL1112_.jpg",
//                 title: "Joyroom JR-T03S Air Promotions",
//                 newPrice: 599,
//                 discount: "42%",
//                 oldPrice: 1041,
//                 AboutThisItem: [
//                     "Greatly reduce the burden on your ears, and provide a convenient storage for you to carry with you",
//                     "Provide fast and stable pairing for your Bluetooth devices",
//                     "Preventing others from hearing the sound, whether for privacy or to prevent disturbing others",
//                     "Up to 4 hours of music and talk time, Compatible with Bluetooth devices such as smartphones and tablets",
//                     "Wireless charging box with dual wireless headphones"
//                 ],
//             },
//             {
//                 id:3,
//                 img: "https://m.media-amazon.com/images/I/81oXmTMjt0L._AC_SX575_.jpg",
//                 title: "Skechers Women's SUMMITS FRESH TAKE Sneaker",
//                 newPrice: 2439,
//                 discount: "0%",
//                 oldPrice: 2439,
//                 AboutThisItem: [
//                     "Skechers Memory Foam cushioned comfort insole",
//                     "SKECHERS Air-Cooled Memory Foam comfort insole with cushioning.",
//                     "Slip-on athletic sporty sneaker design",
//                     "Lightweight flexible shock-absorbing midsole"
//                 ]
//             },
//             {
//                 id:4,
//                 img: "https://m.media-amazon.com/images/I/31O5el1GeUL._AC_SL1041_.jpg",
//                 title: "Xiaomi VXN4305GL Redmi Power Bank, 10000mAh - Black",
//                 newPrice: 589,
//                 discount: "25%",
//                 oldPrice: 785.72,
//                 AboutThisItem: [
//                     "Unique and fashionable design.",
//                     "Country of Origin: China",
//                     "Made of high quality materials",
//                     "Compatible with multiple devices and easy to use"
//                 ]
//             },
//             {
//                 id:5,
//                 img: "https://m.media-amazon.com/images/I/61FKVerMRWL._AC_SX679_.jpg",
//                 title: "Casio Men's Dial Stainless Steel Band Watch",
//                 newPrice: 2589,
//                 discount: "29%",
//                 oldPrice: 3655,
//                 AboutThisItem: [
//                     "Brand: Venice",
//                     "Display type: Analog",
//                     "Special feature: Chronograph",
//                     "Style: Bracelet",
//                     "Target gender: Female",
//                     "Watch movement type: Quartz"
//                 ]
//             },
//             {
//                 id:6,
//                 img: "https://m.media-amazon.com/images/I/71G7SpdCQ4L._AC_SX679_.jpg",
//                 title: "Adidas Sport  for Men",
//                 newPrice: 1209,
//                 discount: "29%",
//                 oldPrice: 1699,
//                 AboutThisItem: [
//                   "Package Dimensions: 32.7 x 22.8 x 1.8 cm; 20 Grams",
//                   "Date First Available: 23 January 2023",
//                   "Manufacturer: adidas",
//                   "ASIN: B0BSVGB217",
//                   "Item model number: HS2533",
//                   "Department: Men's",
//                   "Best Sellers Rank: #6,276 in Fashion"
//                 ]
//               },
//               {
//                 id:7,
//                 img: "https://m.media-amazon.com/images/I/71sziuRW5CL._AC_SL1500_.jpg",
//                 title: "Samsung Galaxy A04s",
//                 newPrice: 3637,
//                 discount: "4%",
//                 oldPrice: 3777,
//                 productLink: "https://www.amazon.eg/dp/B0BXXZTSW7?ref_=Oct_DLandingS_D_8a5c2ede_NA&th=1",
//                 AboutThisItem: [
//                   "3GB RAM",
//                   "Dual SIM",
//                   "32GB Storage",
//                   "LTE Connectivity",
//                   "Wi-Fi",
//                   "Human interface input: Touchscreen, Microphone",
//                   "Middle East Version"
//                 ]
//               },
//               {
//                 id:8,
//                 img: "https://m.media-amazon.com/images/I/71HJKKkA5RL._AC_SX535_.jpg",
//                 title: "New Balance",
//                 newPrice: 3039,
//                 discount: "20%",
//                 oldPrice: 3799,
//                 AboutThisItem: [
//                   "Lightweight EVA foam cushioning in the midsole and heel increases comfort",
//                   "Encap midsole cushioning combines lightweight foam with a durable polyurethane rim to deliver all-day support",
//                   "Suede and mesh upper"
//                 ]
//               },
//               {
//                 id:9,
//                 img: "https://m.media-amazon.com/images/I/81usWyy7zxL._AC_SY879_.jpg",
//                 title: "Marc by Marc Jacobs Women's",
//                 newPrice: 2009,
//                 discount: "10%",
//                 oldPrice: 2209,
//                 AboutThisItem: [
//                   "Movement Type: Quartz",
//                   "Display type: analogue  ",
//                   "Case Material: Stainless Steel",
//                 ]
//               },
//               {
//                 id:10,
//                 img: "https://m.media-amazon.com/images/I/71Va1t96fZL._AC_SL1500_.jpg",
//                 title: "INtex CURTAINS HOUSE 100% Blackout Curtains",
//                 newPrice: 473,
//                 discount: "10%",
//                 oldPrice: 526,
//                 warranty: "6 Months Warranty",
//                 AboutThisItem: [
//                   "Privacy Protection: Help to protect total privacy",
//                   "Grommet Construction: Each curtain panel has 14 silver metal grommets on top. Each grommet inner diameter is 1.6 inches, comparable with most rods. Easy to hang and slide smoothly.",
//                   "Room Darkening: These curtains can block out sunlight and UV rays (Darker colors work better). Perfect for night shifts, late sleepers, and afternoon naps. Protects floors and upholstery from color shading.",
//                   "Thermal Insulated: Energy-saving curtains that insulate against summer heat and winter chill to balance your room temperature and save on energy costs. Reduces outside noise and windproof.",
//                   "Care Instructions: Machine washable in a gentle cycle and cold water. Do not bleach. Warm iron or steam iron on the backside, and tumble dry at low temperatures."
//                 ]
//               },
              
//         ]},
//     reducers:{
//         addProduct:function(state,action){
//             state.products=action.payload
//         }
//     }

// })
// export default productSlice.reducer



///////////////////////////////////////

