import { ELangType, EOrderType } from "./global-types"

export interface IResult {
    isLoading: boolean,
    isLoaded?: boolean,
    isError?: boolean,
    data?: any,
    success?: string,
    error?: string
}

export interface KeyPair {
    key: string,
    value: string
}

export interface IUserAction {
    name: string,
    result: IResult
}

export interface User {
    firstname: string,
    lastname: string
}
export interface LogIn {
    user: User,
    token: string,
    createAt: string,
    expireAt: string | null
}

export interface ISelectOption {
    value: string,
    label: string
}

export interface ICare {
    createAt: string,
    endAt?: string,
    createFor: string,
    createBy: string,
    during: number,
    title: string,
    description?: string,
    status: string,
    isSelected?: boolean,
    moreDetails?: {}
}

export interface IAppState {
    comments: IResult;
    token: string | null;
    logIn: LogIn | null;
    userAction: IUserAction;
    scroll: number;
    lang: ELangType;
    sideNaveStatus: boolean;
}

export interface IDocState {
    aboutUs: { status: IStatus, content: ISection[] };
    userGuide: { status: IStatus, content: ISection[] };
    legalNotice: { status: IStatus, content: ISection[] };
}

export interface ISection {
    id: number,
    leftUrlFile?: string;
    rightUrlFile?: string;
    text?: string
}

export interface IStatus {
    editing: boolean;
    loading: boolean;
    deleting: boolean;
    error?: string;
    success?: string;
}