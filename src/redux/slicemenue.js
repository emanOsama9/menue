import  {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
 



 

 export let fetchMenue=createAsyncThunk("menue/fetchreceipes",async function(){
 
   let data=await axios.get("https://dummyjson.com/recipes")
          return data.data.recipes
 
 });





let menueslice=createSlice({
name:"menue",
initialState:{
loading:false,
error:"",
    menue:[]

},
extraReducers:(function(builder){
    
    
    
    builder.addCase(fetchMenue.pending,function(state,action){

            state.loading=true


}


);



builder.addCase(fetchMenue.fulfilled,function(state,action){

    state.loading = false;
    state.menue = action.payload


}


);

builder.addCase(fetchMenue.rejected,function(state,action){
    state.loading = false;

     state.error=action.error.message


}


);



}




)
 
})

export default menueslice.reducer