<script>
    import { store } from '../../store.js';

    export default {
        data() {
            return {
                store,   
                minIndexCarousell: 0,
                maxIndexCarousell: 5,
            }
        },
        methods:{

            selectTypology(typology, i){

                if(!this.store.selectedTypology.includes(typology)){

                    this.store.selectedTypology.push(typology);
                }
                else{
                    const indexToRemove = this.store.selectedTypology.indexOf(typology);
                    if (indexToRemove !== -1) { // Assicurati che l'elemento sia stato trovato
                        this.store.selectedTypology.splice(indexToRemove, 1); // Rimuovi l'elemento dall'array
                    }
                }
                
                console.log(this.store.selectedTypology)
            },

            nextButton(){

                if(this.maxIndexCarousell < this.store.typologies.length && this.minIndexCarousell < this.store.typologies.length - 5){
                    this.maxIndexCarousell += 1;
                    this.minIndexCarousell += 1;
                }else{
                    this.maxIndexCarousell = 5;
                    this.minIndexCarousell = 0;
                }

            },

            prevButton(){

                if(this.maxIndexCarousell == 5 && this.minIndexCarousell == 0){
                    
                    this.maxIndexCarousell = this.store.typologies.length;
                    this.minIndexCarousell = this.store.typologies.length - 5;
                    
                }else{

                    this.maxIndexCarousell -= 1;
                    this.minIndexCarousell -= 1;
                    
                }

            },

        },
        components:{
           
        },
        setup() {
            return {
                
            };
        },
        mounted(){
            
        }
    }
    </script>

<template>
    
    <div class="container-tipology">
        <button @click="prevButton()">
            <img src="../../assets/img/left.png" alt="">
        </button>
        <div class="single-typology" v-for="(elem, i) in store.typologies.slice(minIndexCarousell, maxIndexCarousell)" :key="i">
            
            <h3 class="fade-enter-active fade-enter-to">
                {{ elem.name }}
            </h3>
            

            <div @click="selectTypology(elem.name, i)" class="img-container"
                :class="{
                'selected' : store.selectedTypology.includes(elem.name),
                'small' : this.$route.name == 'list'  
            }">
                
                
                <img :src="'http://127.0.0.1:8000/storage/images/' + elem.img" alt="" v-if="this.$route.name != 'list'">

                <div class="color-layer">
                </div>
                
            </div>
        </div>
        <button @click="nextButton()">
            <img src="../../assets/img/right.png" alt="">
        </button>
    </div>

</template>

<style lang="scss" scoped>

    .container-tipology{

        width: 60%;
        max-width: 60%;
        display: flex;
        align-items: center;
        position: absolute;
        margin: 0 auto;
        bottom: - 170px;
        left: 0;
        right: 0;
        z-index: 3;
        button{

            width: 50px;
            height: 50px;
            background-color: transparent;
            border: none;
            font-size: 2.5rem;
            font-weight: bold;
            color: #6AAED7;
        }
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
                border: 0px solid transparent;
                transition: all .2s ease-in-out;
                position: relative;
                &.small{

                    height: 90px;
                }
                &.selected{
                    border: 6px solid #6AAED7;
                }
                img{
                    height: 100%;
                    object-fit: cover;
                    width: 100%;
                    filter: grayscale(0.5);
                    
                }
                .color-layer{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #007bff;
                    background: linear-gradient(to top, #007bff, rgba(0, 123, 255, 0));
                    opacity: 0.1;
                    z-index: 4;
                }
            }            
        }
    }
</style>
