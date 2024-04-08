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
            /*
                Prima di entrare  nella rotta esegue il codice seguente
            */
            beforeEnter: (to, from, next) => {
                    
                    const slug = store.InputHome.replace(/ /g, '-').toLowerCase();
                    /*
                        Si esegue una chiamata Axios con i parametri, corrispettavemte 'slug' e 'typologies'
                    */
                    Axios.get("http://127.0.0.1:8000/api/restaurant", {
                        params: {
                            page: 1,
                            slug: slug,
                            typologies: store.selectedTypology,
                        },
                    }).then((res) => {
                        store.currentRestaurants = res.data.results.data;
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