import Vue from 'vue';
import Vuex from '../vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        score(state) {
            return state.count;
        }
    },
    mutations: {
        add(state, num = 1) {
            state.count += num;
        }
    },
    actions: {
        asyncAdd({commit}, num = 1) {
            commit('add', num);
        }
    }
})