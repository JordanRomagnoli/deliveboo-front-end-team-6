<script>
    import Axios from 'axios';
    import InputHome from './InputHome.vue';
    import TypologiesCarousell from './TypologiesCarousell.vue';
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
                    //console.log(res);
                    this.store.typologies = res.data.results;
                    console.log(store.typologies);
                });
            }

        },
        components:{
            TypologiesCarousell,
            InputHome,
        },
        mounted(){
            this.autoPlay();
            this.getTypologies();
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

            <TypologiesCarousell/>

        </div>
    </section>
    <section class="bottom-main">
        
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/Home/home-main.scss' as *;
</style>
