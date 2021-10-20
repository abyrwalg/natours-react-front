/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_URL } from '../../constants/main';

export const getAllTours = createAsyncThunk(
  'posts/getAllTours',
  async (/* , { dispatch, getState } */) => {
    // you can access state here
    // const { todos } = getState()
    // you can dispatch any action from here!
    // dispatch(del(2))
    const response = await axios.get(`${API_URL}/tours`);
    return response.data.data.data;
  }
);

const toursSlice = createSlice({
  name: 'tours',
  initialState: {
    tours: [],
    isLoading: false,
  },
  extraReducers: {
    [getAllTours.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTours.fulfilled]: (state, action) => {
      state.tours = action.payload;
      state.isLoading = false;
    },
    [getAllTours.rejected]: (state) => {
      state.isLoading = false;
      console.log('Something went wrong');
    },
  },
});

export default toursSlice.reducer;
