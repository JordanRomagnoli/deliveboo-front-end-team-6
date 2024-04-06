<script>
    import Axios from 'axios';
    import InputHome from './InputHome.vue';


    export default {
        data() {
            return {

                JumbotronCounter: 0,

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
            }

        },
        components:{
            InputHome,
        },
        mounted(){
            this.autoPlay();
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
</template>

<style lang="scss" scoped>
@use '../../assets/scss/Home/home-main.scss' as *;
</style>
