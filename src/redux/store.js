import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice';

export const createStore = configureStore({
    reducer: {
        theme: themeReducer
    }
})