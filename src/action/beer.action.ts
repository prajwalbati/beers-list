import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllBeers = createAsyncThunk<any, any>('get/beers', async ({ page, perPage }) => {
    try {
        let apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
});