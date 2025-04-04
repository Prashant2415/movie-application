import { createSlice } from "@reduxjs/toolkit";
import { MovieData } from "../component/MovieData";
const mData = MovieData;
const movieSlice = createSlice({
    name: "movieSlice",
    initialState:{
        movieData: mData,
        watchListData: []
    },
    reducers: {
        addToWatchlist: (state,action)=>{
            const isPresent = state.watchListData.find((item)=> item.id === action.payload.id)
            if(!isPresent)
            {
                state.watchListData.push({...action.payload, inWatchlist: true});
            }
        },
        removeFromWatchlist: (state,action)=>{
            const isPresent = state.watchListData.find((item)=> item.id === action.payload.id);
            if(isPresent)
            {
                state.watchListData = state.watchListData.filter((item)=> item.id !== action.payload.id)
            }
        }
    }
})

export const {addToWatchlist, removeFromWatchlist} = movieSlice.actions;
export default movieSlice.reducer