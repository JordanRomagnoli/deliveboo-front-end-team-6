<script>
    import { store } from '../../store.js';
    //import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper/modules';

    export default {
        data() {
            return {
                store,               
            }
        },
        methods:{


        },
        components:{
            // Swiper,
            // SwiperSlide,
        },
        setup() {
            return {
                // modules:[
                //     Pagination
                // ]
            };
        },
        mounted(){
            
        }
    }
    </script>

<template>
    
    <div class="container-tipology"> 
        <div v-for="(elem, i) in store.typologies" class="single-typology">
            <h3>
                {{ elem.name }}
            </h3>

            <div class="img-container">
                <img :src="'http://127.0.0.1:8000/storage/images/' + elem.img" alt="">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    
</style>
