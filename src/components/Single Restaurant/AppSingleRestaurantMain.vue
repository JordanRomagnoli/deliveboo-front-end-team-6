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
                <div v-if="store.currentSingleRestaurant.img != null" class="single-restaurant">
                    <div class="restaurant-img">
                        <img :src="'http://127.0.0.1:8000/storage/images/' + store.currentSingleRestaurant.img" :alt="store.currentSingleRestaurant.company_name"/>
                        <div class="img-overlay"></div>
                    </div>
                    <div class="info-container">
                        <h2 class="company-name">
                            {{ store.currentSingleRestaurant.company_name }}
                        </h2>
                    </div>
                </div>
                <div class="menu-container p-3">
                    <div class="menu p-3">
                        <div class="title-menu">
                            Menù:
                        </div>
                        <div class="dish-container">
                            <ul class="d-flex">
                                <li class="dish" v-for="dish in store.currentSingleRestaurant.dishes" :key="dish.id">
                                    <div>
                                        <img :src="'http://127.0.0.1:8000/storage/images/' + dish.img" :alt="dish.name">
                                        <!-- {{ dish.img }} -->
                                    </div>
                                    <div class="col-6">
                                        {{ dish.name }}
                                    </div>
                                    <div class="col-6">
                                        {{ dish.price }}
                                    </div>
                                    <div>
                                        <button class="cart-add" @click="addToCart">
                                            Aggiungi al carrello
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.restaurant-container {
    margin: 0 auto;
    width: 100%;
    padding: 40px;
    padding-top: 120px;
}

.single-restaurant {
    width: 100%;
    height: 500px;
    margin: 20px;
    //position: relative;
    overflow: hidden;

    .restaurant-img {
        width: 100%;
        height: 100%;
        opacity: 0.9;
        filter: blur(2px);
        position: relative;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        .img-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60%; /* Altezza dell'overlay di sfumatura */
            background: linear-gradient(to top, rgb(255, 255, 255), transparent); /* Sfumatura verso l'alto */
        }
    }

    .info-container {
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        bottom: 10%;
        padding: 0 !important;
        .company-name {
            text-shadow: 2px 2px 4px rgba(46, 46, 46, 0.491);
            color: white;
            position: absolute;
            font-size: 100px;
            left: 120px;
            bottom: 50px;
        }
    }
}

.menu-container {
    width: 700px;
    height: 700px;
    .menu {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: white;
        box-shadow: 10px 10px 5px rgba(211, 211, 211, 0.613);
    }
    .title-menu {
        text-align: center;
    }
    .dish-container {

        .dish {
            //width: calc(100% / 2);
            list-style: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;

            .cart-add {
                background-color: #007bff;
                color: #fff;
                border: none;
                padding: 5px 10px;
                border-radius: 3px;
                cursor: pointer;
            }
        }

    }
}

</style>
