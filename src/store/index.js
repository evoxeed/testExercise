import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        expertise__item: [
            {
                "icon": "desktop-icon",
                "heading": "web design & development",
                "text": "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
                "additionalClass": ""
            },
            {
                "icon": "sour-icon",
                "heading": "branding identity",
                "text": "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
                "additionalClass": ""
            },
            {
                "icon": "phone-icon",
                "heading": "mobile app",
                "text": "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
                "additionalClass": ""
            },

            {
                "icon": "diagrams-icon",
                "heading": "search engine optimization",
                "text": "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
                "additionalClass": ""
            },
            {
                "icon": "game-icon",
                "heading": "game development",
                "text": "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
                "additionalClass": ""
            },

            {
                "icon": "heart-icon",
                "heading": "made with love",
                "text": "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.",
                "additionalClass": ""
            }

        ],
    },
    getters: {
        getExpertiseItem(state) {
            return state.expertise__item
        },
    },
    mutations: {},
    actions: {},
    modules: {}
})
