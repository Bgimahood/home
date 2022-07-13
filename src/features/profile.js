import { createSlice } from '@reduxjs/toolkit';
import pic from '../pics/img_avatar.png';
export const profileSlice = createSlice({
    name: 'profile',
    initialState: { value:{profilePic:pic}},
    reducers: {
        setProfile: (state, action) => {
            state.value = action.payload;
        },
    },
});
export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;