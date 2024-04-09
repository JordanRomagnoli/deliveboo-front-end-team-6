<script>
    import Axios from 'axios';
    import RestaurantListHeader from '../RestaurantList/RestaurantListHeader.vue';
    import Cart from './Cart.vue';
    import { store } from '../../store.js'

    export default {
        data() {
            return { 
                store,
                currentSingleRestaurant: null,
            }
        },
        components: {
            RestaurantListHeader,
            Cart,
        },
        methods: {
            getSingleRestaurant() {
                Axios.get("http://127.0.0.1:8000/api/restaurant/" + this.$route.params.slug)
                .then(response => {
                    this.currentSingleRestaurant = response.data.results;
                    console.log(response);
                    console.log(this.$route.params.slug);
                });
            }
        },
        mounted(){
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
            <!-- v-if=" store.currentSingleRestaurant.img != null " -->
            <div v-if="currentSingleRestaurant && currentSingleRestaurant.img != null" class="single-restaurant">
                <div class="restaurant-img">
                    <img :src="'http://127.0.0.1:8000/storage/images/' + currentSingleRestaurant.img" :alt="currentSingleRestaurant.company_name"/>
                    <div class="img-overlay"></div>
                </div>
                <div class="info-container">
                    <h2 class="company-name">
                        {{ currentSingleRestaurant.company_name }}
                    </h2>
                </div>
            </div>

            <section class="bottom">    
                <div class="menu-container p-3">
                    <div v-if="currentSingleRestaurant && currentSingleRestaurant.address != null" class="restaurant-info">
                    Indirizzo: {{ currentSingleRestaurant.address }}
                    </div>                    
                    <div class="title-menu">
                        Menù:
                    </div>
                    <div class="dish-container">  
                        <div v-if="currentSingleRestaurant && currentSingleRestaurant.dishes != null" class="dish-container">                     
                            <div class="d-flex-wrap justify-content-space-between p-0 row">
                                <div class="dish-card col-6" v-for="dish in currentSingleRestaurant.dishes" :key="dish.id">
                                    <div class="dish-img">
                                        <img :src="'http://127.0.0.1:8000/storage/' + dish.img" :alt="dish.name">
                                    </div>
                                    <div>
                                        {{ dish.name }}
                                    </div>
                                    <div>
                                        {{ dish.price }} 
                                    </div>
                                    <div>
                                        <button class="cart-add" @click="addToCart">
                                            Aggiungi al carrello
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Cart/>

            </section>
        </section>

    </main>
</template>

<style lang="scss" scoped>
.single-restaurant {
    width: 100%;
    height: 400px;
    position: relative;
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
        width: 100%;
        padding: 0 !important;
        left: 0;
        bottom: 0px;

        .company-name {
            text-shadow: 2px 2px 4px rgba(46, 46, 46, 0.491);
            color: white;
            font-size: 100px;
        }
    }
}

.bottom{

    justify-content: space-between;
    display: flex;
    .menu-container {
    width: 70%;
    height: 700px;
    display: flex;
    flex-direction: column;
    //justify-content: end;
    overflow: hidden;
    border-radius: 20px;
    background-color: white;
    box-shadow: 10px 10px 5px rgba(211, 211, 211, 0.613);

    .restaurant-info {
        height: 20%;
    }

    .title-menu {
        //text-align: center;
    }
    .dish-container {
        height: 60%;
        overflow: auto;

        .dish-card {
            width: calc(100% / 2);
            list-style: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            //padding: 10px;
            margin-bottom: 10px;

            .dish-img {
                width: 100%;
                height: 50px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }

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
}



</style>
