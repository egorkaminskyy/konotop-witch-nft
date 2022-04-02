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

export type Link = {
    linkUrl: string;
    title: string;
}

export interface HeaderResources {
    logoUrl: string;
    faqLink: Link;
    homeLink: Link;
    aboutLink: Link;
    singInLink: Link;
    collectionLink: Link;
}

export interface HeaderProps {
    resources: HeaderResources;
    onLogoClick: () => void;
    onFaqClick: () => void;
    onHomeClick: () => void;
    onAboutClick: () => void;
    onSinginClick: () => void;
}