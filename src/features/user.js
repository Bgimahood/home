import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: { name: '', email: '', contact: '' } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = {name:"", email:"", contact:""}
        }
    },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;