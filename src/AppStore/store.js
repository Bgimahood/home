import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user';
import MyModal from '../features/MyModal';
import authSlice from '../features/authSlice';
import ThemeColor from '../features/ThemeColor';
import SpinSlice from '../features/SpinSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    mymodal: MyModal,
    authentication: authSlice,
    activestate: ThemeColor,
    spinner: SpinSlice,
  },
});