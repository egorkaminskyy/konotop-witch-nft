import { createAction, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeState {};

export const initialState: HomeState = {};

const name = 'home';

const home = createSlice({
    name: name,
    initialState: {},
    reducers: {}
});

export const { buyNftClick, helpUkraineClick } = {
    buyNftClick: createAction(`${name}/buyNftClick`),
    helpUkraineClick: createAction(`${name}/helpUkraineClick`),
    ...home.actions
}

export default home.reducer;