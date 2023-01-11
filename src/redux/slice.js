import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'light',
    initialState: {
        name: ''
    },

    reducers: {
        changingTheme(state, { payload }) {
            return { ...state, name: payload }
        }
    }
})

export const { changingTheme } = slice.actions;

export const selectTheme = state => state.theme;

export default slice.reducer;