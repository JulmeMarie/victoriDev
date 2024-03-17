import { createSlice } from '@reduxjs/toolkit';
import { IAppState, IDocState, IResult, ISection, IStatus, IUserAction, LogIn, User } from '../../utils/global-interfaces';

export const docSlice = createSlice({
    name: "appReducer",
    initialState: {
        aboutUs: { status: {} as IStatus, content: [] as ISection[] },
        userGuide: { status: {} as IStatus, content: [] as ISection[] },
        legalNotice: { status: {} as IStatus, content: [] as ISection[] },
    } as IDocState,
    reducers: docActions
});

export const {
    setLoadingDoc,
    setLoadedDoc,
} = docSlice.actions;