<script>
    import Axios from 'axios';
    import RestaurantListHeader from '../RestaurantList/RestaurantListHeader.vue';
    import { store } from '../../store.js'

    export default {
        data() {
            return { 
                store
            }
        },
        components: {
            RestaurantListHeader,
        },
        methods: {
            getSingleRestaurant() {
                Axios.get("http://127.0.0.1:8000/api/restaurant/" + this.$route.params.slug)
                .then(response => {
                    this.store.currentSingleRestaurant = response.data.results;
                    console.log(response);
                    console.log(this.$route.params.slug);
                });
            }
        },
        created(){
            this.getSingleRestaurant();
        }
    }
</script>

<template>
    <header>
        <RestaurantListHeader/>
    </header>
    <main>
        <section>
            <div v-if="store.currentSingleRestaurant != null" class="restaurant-container">
                <div v-if="store.currentSingleRestaurant.img != null" class="jumbotrom">
                    <img :src="'http://127.0.0.1:8000/storage/images/' + store.currentSingleRestaurant.img" :alt="store.currentSingleRestaurant.company_name"/>
                </div>
                <div>
                    <h2 class="text-h2">
                        {{ store.currentSingleRestaurant.company_name }}
                    </h2>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>
