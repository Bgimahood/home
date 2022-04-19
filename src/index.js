import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from './features/user';
import MyModal from './features/MyModal';

const store = configureStore({
  reducer: {
    user: userReducer,
    mymodal: MyModal,
  },
});

ReactDOM.render(  
   <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById('root')
);


