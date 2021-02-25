import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import( '@/App')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return {
                savedPosition,
                selector: to.hash
            }
        } else {
            // const position = {}

            if (to.hash) {
                return {
                    selector: to.hash,
                    offset: {x: 0, y: 50}
                }
            }

            // if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
            //     return {
            //         position,
            //         selector: to.hash
            //     }
            // }
            return false
        }
        // return {x: 0, y: 0}
    }
})

export default router
