import { createAction, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderState {};

export const initialState: HeaderState = {};

const name = 'about';

const about = createSlice({
    name: name,
    initialState: {},
    reducers: {}
});

export const { buyNftClick } = {
    buyNftClick: createAction(`${name}/buyNftClick`),
    ...about.actions
}

export default about.reducer;