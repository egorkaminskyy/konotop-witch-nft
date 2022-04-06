import { createAction, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderState {};

export const initialState: HeaderState = {};

const name = 'header';

const header = createSlice({
    name: name,
    initialState: {},
    reducers: {}
});

export const { logoClick, homeClick, faqClick, collectionClick, singInClick, aboutClick } = {
    logoClick: createAction(`${name}/logoClick`),
    homeClick: createAction(`${name}/homeClick`),
    faqClick: createAction(`${name}/faqClick`),
    collectionClick: createAction(`${name}/collectionClick`),
    singInClick: createAction(`${name}/singInClick`),
    aboutClick: createAction(`${name}/aboutClick`),
    ...header.actions
}

export default header.reducer;