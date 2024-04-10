<script>
    import Axios from 'axios';
    import InputHome from './InputHome.vue';
    import { store } from '../../store.js';

    export default {
        data() {
            return {

                JumbotronCounter: 0,
                store,
                carousell: [
                    'burger.jpg',
                    'pizza.jpg',
                    'salad.jpg',
                    'soup.jpg',
                    'taco.jpg',
                ], 
            }
        },
        methods:{

            getImagePath: function (imgPath) {
                return new URL(imgPath, import.meta.url).href;
            },

            autoPlay(){
                setInterval(() => {
                    if(this.JumbotronCounter < this.carousell.length - 1){
                
                    this.JumbotronCounter ++;
            
                    }else{
                        this.JumbotronCounter = 0;
                    }
                }, 5000);
            },

            getTypologies() {

                Axios.get('http://127.0.0.1:8000/api/typology')
                .then(res => {
                    this.store.typologies = res.data.results;
                    //console.log(store.typologies);

                });
            },

        },
        components:{
            InputHome,
        },
        created(){
            this.autoPlay();
            this.getTypologies();
        },
        updated(){
            
        }
    }
    </script>

<template>
    <section class="jumbo-tron">
        <div class="carousell">

            <div class="color-layer">
                <InputHome/>
            </div>

            <transition name="fade" mode="out-in"> 

                <img :src="getImagePath('../../assets/img/food-home-carousell/' + carousell[JumbotronCounter])" alt="">
            
            </transition>


        </div>
    </section>
    <section class="bottom-main">
        <div class="restaurant-result">

            
            <div v-for="(restaurant, i) in store.restaurantPreview" :key="i" class="mycardcontainer">
                <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }">
                    <div class="myrestaurantcard">
                        <div v-if="restaurant.img != null" class="myrestaurantimg">
                            <div class="color-layer">
                            </div>
                            <img :src="'http://127.0.0.1:8000/storage/images/' + restaurant.img" :alt="restaurant.company_name">
                        </div>
                        <div class="myrestaurantcardbody">
                            <h2 class="text-h2">
                                {{ restaurant.company_name }}
                            </h2>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
        
        <div class="bg">
            <div class="my-container">
                <div class="row">
                    <div class="col-6">
                        <img src="../../assets/img/DESKTOP-E-CELL.png" alt="">
                    </div>

                    <div class="col-6">
                        <h3>
                            Scarica l'app e segui il tuo ordine tramite ogni tuo dispositivo
                        </h3>

                        <p>
                            I piatti e i prodotti che ami, consegnati in pochissimo tempo. Vedrai quando il rider ha ritirato l'ordine, che potrai seguire passo passo, e riceverai una notifica quando sarà quasi da te.
                        </p>

                        <div class="buttons-container">
                            
                            <div class="single-button">
                                <a href="#nogo">
                                    <img src="../../assets/img/apple-store-badge.png" alt="">
                                </a>
                            </div>

                            <div class="single-button">
                                <a href="#nogo">
                                    <img src="../../assets/img/google-play-badge.png" alt="">
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/Home/home-main.scss' as *;
</style>
