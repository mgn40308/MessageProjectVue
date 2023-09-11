import { createStore } from 'vuex'
export default createStore({
    state: {
        message: null
    },

    mutations: {
        updateMessage(state, message) {
            state.message = message
        }
    }
})