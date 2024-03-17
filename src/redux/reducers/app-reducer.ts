import { createSlice } from '@reduxjs/toolkit';
import { IAppState, IResult, ISection, IUserAction, LogIn, User } from '../../utils/global-interfaces';
import { EDeviceType, ELangType } from '../../utils/global-types';
import { DEFAULT_LANG } from '../../utils/languages/I18N';
import { mockLogin } from '../../utils/global-default-values';
import { appActions } from '../actions/app-actions';

export const appSlice = createSlice({
    name: "appReducer",
    initialState: {
        comments: {},
        token: null,
        logIn: mockLogin,
        userAction: {},
        scroll: 0,
        lang: DEFAULT_LANG,
        sideNaveStatus: false
    } as IAppState,
    reducers: appActions
});

export const {
    setDrawerStatus,
    setLogIn,
    setUserAction,
    setLoadingComments,
    setLoadedComments,
    refreshToken,
    updateLang,
    initLang,
    setScroll
} = appSlice.actions;