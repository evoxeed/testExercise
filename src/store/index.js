import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        expertise__itemList: [
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

        team__itemList: [
            {
                "img": require('@/assets/img/teamPhoto.png'),
                "heading": "semf ucuk",
                "subHeading": "ceo & founder"
            },
            {
                "img": require('@/assets/img/teamPhoto.png'),
                "heading": "dik adalin",
                "subHeading": "engineering"
            },
            {
                "img": require('@/assets/img/teamPhoto.png'),
                "heading": "jeng kol",
                "subHeading": "designer"
            },
            {
                "img": require('@/assets/img/teamPhoto.png'),
                "heading": "pet romak",
                "subHeading": "marketing"
            },
        ],
    },
    getters: {
        getExpertiseItems(state) {
            return state.expertise__itemList
        },

        getTeamItems(state) {
            return state.team__itemList
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
