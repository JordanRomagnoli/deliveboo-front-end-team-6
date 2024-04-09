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

            <section class="main-page">    
                <div class="menu-container p-3">
                    <div v-if="currentSingleRestaurant && currentSingleRestaurant.address != null" class="restaurant-info">
                        <span><i class="fa-solid fa-location-dot"></i></span> <strong>{{ currentSingleRestaurant.address }}</strong>
                    </div>                    
                    <div v-if="currentSingleRestaurant && currentSingleRestaurant.dishes != null" class="dish-container">                     
                        <div class="card my-card" v-for="dish in currentSingleRestaurant.dishes" :key="dish.id">
                            <div class="dish-container-img">
                                <img :src="'http://127.0.0.1:8000/storage/' + dish.img" :alt="dish.name" class="card-img-top">
                            </div>
                            <div class="card-body">
                                <div>
                                    <h4><strong>{{ dish.name }}</strong></h4>
                                    <p class="card-text"> {{ dish.description }}</p>
                                </div>
                            </div>
                            <div class="mybuttoncontainer">
                                    <div class="p-2 mt-1">
                                        <h5><strong>{{ dish.price }} <span>&euro;</span> </strong></h5>
                                    </div>
                                    <div>
                                        <button class="btn btn-primary mybutton" @click="addToCart">
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
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
        padding: 32px;
        left: 0;
        bottom: 0px;

        .company-name {
            text-shadow: 2px 2px 4px rgba(46, 46, 46, 0.491);
            color: white;
            font-size: 100px;
        }
    }
}

.main-page{
    justify-content: space-between;
    display: flex;
    padding: 30px;

    .menu-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 10px 10px 5px rgba(120, 120, 120, 0.225);

    .restaurant-info {
        padding: 20px;
        span{
            i{
                color: red;
            }
        }
    }

    .dish-container {
        overflow: auto;
        background-color: rgba(246, 245, 245, 0.252);
        height: 100vh;
        padding: 10px;
        margin: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        .my-card {
            width: calc(100% / 2 - 20px);
            margin: 10px;
            border-radius: 30px;
            overflow: hidden;
            flex-direction: column;
        }
            .dish-container-img {
                width: 100%;
                height: 250px;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }

            .mybuttoncontainer{
                padding: 20px;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                h5{
                    color: red;
                }

                .mybutton{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            }
    }
}
}



</style>
