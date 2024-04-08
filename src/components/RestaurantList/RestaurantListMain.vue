<script>
import Axios from "axios";
import { store } from '../../store.js';


export default {
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: 2,
            minIndexCarousell: 0,
            maxIndexCarousell: 5,
        };
    },
    methods: {

        getTypologies() {

            Axios.get('http://127.0.0.1:8000/api/typology')
            .then(res => {
                this.store.typologies = res.data.results;
                console.log(store.typologies);
            });
        },

        getRestaurants(page) {
            Axios.get("http://127.0.0.1:8000/api/restaurant", {
                params: {
                page: page,
                company_name: this.store.InputHome,
                typologies: this.store.selectedTypology,
                },
            }).then((res) => {
                console.log(res.data, "ristorante");
                this.store.currentRestaurants = res.data.results.data;
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.getRestaurants(this.currentPage - 1);
            }
            console.log(this.currentPage, "pagina precedente");
            console.log(this.store.currentRestaurants);

        },

        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.getRestaurants(this.currentPage + 1);
            }
            console.log(this.store.typologies);
        },

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
    mounted(){
        this.getTypologies();
    }
};
</script>

<template>

    <div class="container-tipology">
        <button @click="prevButton()">
            <img src="../../assets/img/left.png" alt="">
        </button>
        <div class="single-typology" v-for="(elem, i) in store.typologies.slice(minIndexCarousell, maxIndexCarousell)" :key="i">
            
            <div @click="selectTypology(elem.name, i)" class="img-container"
                :class="{
                'selected' : store.selectedTypology.includes(elem.name),
            }">
                <h3>
                    {{ elem.name }}
                </h3>
            </div>
        </div>
        <button @click="nextButton()">
            <img src="../../assets/img/right.png" alt="">
        </button>
    </div>

    <div class="mycontainer">
        <div class="containerflex">
            <div v-for="(restaurant, i) in store.currentRestaurants" :key="i" class="mycardcontainer">
                <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }">
                    <div class="myrestaurantcard">
                        <div v-if="restaurant.img != null" class="myrestaurantimg">
                            <img :src="'http://127.0.0.1:8000/storage/images/' + restaurant.img" :alt="restaurant.company_name">
                        </div>
                        <div class="myrestaurantcardbody">
                            <h2 class="text-h2">
                                {{ restaurant.company_name }}
                            </h2>
                        </div>
                    </div>
                </router-link>    
                <div class="p-3">
                    <h6 v-for="typology in restaurant.typologies" :key="typology.id" class="mybadge"> 
                        {{ typology.name }}
                    </h6>
                </div>
            </div>
        </div>
        <div class="mycontainerbutton">
            <div class="button p-4">
                <button @click="prevPage()">Precedente</button>
            </div>
            <div class="button p-4">
                <button @click="nextPage()">Successivo</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-tipology{


    padding-top: 120px;
    width: 60%;
    max-width: 60%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 80px;
    button{

        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        &:hover{
            transform: scale(1.3);
            border: none;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .single-typology{

        width: calc((100% / 5) - 16px);
        margin: 0px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img-container{

            width: 230px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1e465f;
            border-radius: 35px;
            overflow: hidden;
            cursor: pointer;
            border: 0px solid transparent;
            transition: all .2s ease-in-out;
            position: relative;
            &.selected{
                background-color: #6ad7c1;
            }
            h3{
                font-size: 1.2rem;
                color: white;
                margin: 0;
            }
        }            
    }
}

.mycontainer {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 40px;
}

.containerflex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.mycardcontainer{
    width: calc(100% / 3 - 40px);
}

.myrestaurantcard {
    height: 200px;
    width: 100%;
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    .myrestaurantimg {
        width: 100%;
        height: 100%;
    }
    .myrestaurantcardbody {

        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(0.9px);
        background-color: #000;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0));
        left: 0;
        padding: 0 16px !important;
        padding-bottom: 8px !important;
        display: flex;
        align-items: end;
        justify-content: center;
        .text-h2 {
            max-width: 100%;
            text-shadow: 2px 2px 4px rgba(211, 211, 211, 0.613);
            font-size: 1.7rem;
            color: white;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}

.mybadge{
    width: 100%;
    color: white;
    background-color: #3498db;
    border-radius: 20px;
    display: inline;
    padding: 2px 6px;
    font-size: 12px;
}


.mycontainerbutton{
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: #3498db;
        border: none;
        color: white;
        padding: 7px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 13px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
    }

    button:hover {
        background-color: white;
        color: #3498db;
        border: 1px solid #3498db;
    }

}


</style>
