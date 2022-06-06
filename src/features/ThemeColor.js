import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'activestate',
    initialState: {value:{backgroundColor:'#fff', color:'black'}},
    reducers: {
        makeActive: (state) => {
            state.value= {backgroundColor:'green', color:'white'}
        },
    },
});
export const { makeActive } = themeSlice.actions;
export default themeSlice.reducer;