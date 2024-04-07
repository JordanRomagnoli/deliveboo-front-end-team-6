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

            selectTypology(typology){

                this.store.selectedTypology.push(typology);
                console.log(this.store.selectedTypology);
            },

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
        <div class="single-typology" v-for="index in 5" :key="index">
            <h3>
                <!-- {{ elem.name }} -->
                {{store.typologies[index - 1].name}}
            </h3>
            <div @click="selectTypology(store.typologies[index - 1].name)" class="img-container">
                <img :src="'http://127.0.0.1:8000/storage/images/' + store.typologies[index - 1].img" alt="">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .container-tipology{

        width: 60%;
        max-width: 60%;
        display: flex;
        position: absolute;
        margin: 0 auto;
        bottom: - 170px;
        left: 0;
        right: 0;
        z-index: 3;
        .single-typology{

            width: calc((100% / 5) - 16px);
            margin: 0px 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            h3{
                font-size: 1.2rem;
                color: white;
                margin-bottom: 16px;
            }
            

            .img-container{

                width: 230px;
                height: 230px;
                //border: 1px solid white;
                border-radius: 20px;
                overflow: hidden;
                cursor: pointer;
                img{
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                    filter: grayscale(0.5);
                    
                }
            }            
        }
    }
</style>
