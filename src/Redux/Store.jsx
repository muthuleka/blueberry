import { createSlice,configureStore } from "@reduxjs/toolkit";


let slice = createSlice({
    name :"myslice",
    initialState : {
        cartarray : []

    },
    reducers : {
        viewOnedata(store,action){
            console.log(action);
        store.cartarray = [action.payload]

        }

    }
})


export let myreducers = slice.actions

let store = configureStore(slice)

export default store