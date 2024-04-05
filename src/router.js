import { createRouter, createWebHistory } from "vue-router";

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