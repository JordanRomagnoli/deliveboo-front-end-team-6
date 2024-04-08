import { createRouter, createWebHistory } from "vue-router";
import { store } from './store.js';
import Axios from "axios";



import HomePage from './pages/HomePage.vue';
import RestaurantList from './pages/RestaurantList.vue';
import SingleRestaurant from './pages/SingleRestaurant.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/restaurant-list',
            name: 'list',
            component: RestaurantList,
            beforeEnter: (to, from, next) => {

                    const slug = store.InputHome.replace(/ /g, '-').toLowerCase();

                    Axios.get("http://127.0.0.1:8000/api/restaurant", {
                        params: {
                            page: 1,
                            slug: slug,
                            typologies: store.selectedTypology,
                        },
                    }).then((res) => {
                        console.log(store.InputHome);
                        console.log(store.selectedTypology);
                        console.log(res.data, "ristorante");
                    });
                    next()
            }
        },
        {
            path: '/single-restaurant',
            name: 'restaurant',
            component: SingleRestaurant,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage,
        },
    ]
});

export { router };