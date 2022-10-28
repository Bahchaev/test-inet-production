import { createStore } from "vuex";
import type { COUNTRY_FILTER, IUser, SCORE_FILTER } from "@/utils/types";
import { mockUsers } from "@/mock/users";

interface IState {
    filters: {
        country: null | COUNTRY_FILTER;
        score: null | SCORE_FILTER;
    };
    users: IUser[];
}

export default createStore({
    state(): IState {
        return {
            filters: {
                country: null,
                score: null,
            },
            users: [],
        };
    },

    actions: {
        setCountryFilters({ commit }, value: null | COUNTRY_FILTER) {
            commit("setCountryFilter", value);
        },
        setScoreFilter({ commit }, value: null | SCORE_FILTER) {
            commit("setScoreFilter", value);
        },
        getUsers({ commit }) {
            // here must be API request
            const result: IUser[] = mockUsers.map((user) => user);
            commit("setUsers", result);
        },
    },

    mutations: {
        setCountryFilter(state: IState, value: null | COUNTRY_FILTER) {
            state.filters.country = value;
        },
        setScoreFilter(state: IState, value: null | SCORE_FILTER) {
            state.filters.score = value;
        },
        setUsers(state: IState, value: IUser[]) {
            state.users = value;
        },
    },

    getters: {
        getCountryFilterValue(state: IState): null | COUNTRY_FILTER {
            return state.filters.country;
        },
        getScoreFilterValue(state: IState): null | SCORE_FILTER {
            return state.filters.score;
        },
        getUsers(state: IState): IUser[] {
            return state.users;
        },
    },
});
