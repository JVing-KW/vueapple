import { createWebHistory, createRouter } from "vue-router";
import LoginView from '../views/LoginView.vue'

const routes = [
    {
        path: '/views/JoinView',
        name: 'JoinView', //그냥 이름으로 쓰는듯
        component: () => import('../views/JoinView.vue') // 1. import를 여기서 2. 위에서 import한 변수명을 쓴다.
    },
    {
        path: '/views/LoginView',
        name: 'LoginView',
        component: LoginView
    }

]
// const routes = [
//     { path: "/", name: "Home", component: Home },
//     { path: "/about", name: "About", component: About },
//     { path: "/names", name: "Names", component: Names },
//     { path: "/user/:name", name: "User", component: User },
//     { path: "/user2/:name", name: "User2", component: User2, props: true },
//     { path: "/:catchAll(.*)", name: "ErrorPage", component: ErrorPage },
// ]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
