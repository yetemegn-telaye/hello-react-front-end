import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchRandomGreeting = createAsyncThunk(
    'greetings/fetchRandomGreeting',
    async () => {
      const response = await fetch('http://localhost:3000/random_greeting')
      const data = await response.json()
      return data.message;
    }
);

const initialState = {
    message: '',
};

const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
                state.message = action.payload;
            });
    },
});
export default greetingsSlice.reducer;