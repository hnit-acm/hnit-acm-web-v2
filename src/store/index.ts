import {createStore} from 'vuex'

export default createStore({
    state: {
        isIndex: false
    },
    mutations: {
        setIsIndex(state, payload) {
            state.isIndex = payload
        }
    },
    actions: {},
    modules: {}
})
