import { createSlice } from '@reduxjs/toolkit';

import { IBeerInterface } from '../interface/beer.interface';
import { getAllBeers } from '../action/beer.action';

const initialState: IBeerInterface = {
    beers: [],
    beersLoading: false,
};

const BeerSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllBeers.pending.toString()]: (state) => {
            state.beersLoading = true;
        },
        [getAllBeers.fulfilled.toString()]: (state, action) => {
            state.beersLoading = false;
            state.beers = action.payload;
        },
        [getAllBeers.rejected.toString()]: (state) => {
            state.beersLoading = false;
        },
    }
});

export default BeerSlice.reducer;