import { createSlice } from "@reduxjs/toolkit";
import { MovieData } from "../component/MovieData";
const mData = MovieData;
const movieSlice = createSlice({
    name: "movieSlice",
    initialState:{
        movieData: mData
    },
    reducers: {

    }
})

export default movieSlice.reducer