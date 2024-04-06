<script>
    import Axios from 'axios';
    import InputHome from './InputHome.vue';


    export default {
        data() {
            return { 
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

        },
        components:{
            InputHome,
        }
    }
    </script>

<template>
    <section class="jumbo-tron">
        <div class="carousell">

            <div class="color-layer">
                <InputHome/>
            </div>

            <img :src="getImagePath('../../assets/img/food-home-carousell/' + carousell[0])" alt="">

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/Home/home-main.scss' as *;
</style>
