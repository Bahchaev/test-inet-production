export interface IUser {
    type?: string;
    prependAvatar?: string;
    title?: string;
    subtitle?: string;
    inset?: boolean;
    data?: IFilterData;
}

export interface IFilterData {
    country: COUNTRY_FILTER;
    score: number;
    address: string;
}

export const enum COUNTRY_FILTER {
    RUSSIA = "Russia",
    USA = "USA",
}

export const enum SCORE_FILTER {
    MORE_20 = "> 20",
    LESS_10 = "< 10",
}
