import { createSlice } from '@reduxjs/toolkit';

export const spinSlice = createSlice({
    name: 'spinner',
    initialState: {value:false},
    reducers: {
        startSpin: (state) => {
            state.value = true;
        },
        stopSpin: (state) => {
            state.value = false;
        }
    },
});
export const { startSpin, stopSpin} = spinSlice.actions;
export default spinSlice.reducer;