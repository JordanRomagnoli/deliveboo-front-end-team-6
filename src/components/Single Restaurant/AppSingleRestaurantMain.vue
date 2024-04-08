<script>
    import Axios from 'axios';
    import RestaurantListHeader from '../RestaurantList/RestaurantListHeader.vue';

    export default {
        data() {
            return { 
                restaurant: null,
            }
        },
        components: {
            RestaurantListHeader,
        },
        methods: {
            getSingleRestaurant() {
                Axios.get("http://127.0.0.1:8000/api/restaurant/" + this.$route.params.slug)
                .then(response => {
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
            <div v-if="restaurant != null" class="restaurant-container">
                <div v-if="restaurant.img != null" class="jumbotrom">
                    <img :src="'http://127.0.0.1:8000/storage/images/' + restaurant.img" :alt="restaurant.company_name"/>
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>
