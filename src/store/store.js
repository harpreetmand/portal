import Vue from 'vue'
import Vuex from 'vuex'

import brands from './brands'

import * as actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        brands
    },
    state: {
        isLoggedIn: !!localStorage.getItem('token')
    }
})
