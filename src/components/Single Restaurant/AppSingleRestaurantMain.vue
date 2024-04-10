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


                    console.log(this.currentSingleRestaurant);
                });
            },

            selectDishes(dish, i){

                
                if(!this.store.selectedDishes.includes(dish)){
                    
                    dish['quantity'] = 1
                    this.store.selectedDishes.push(dish);
                    console.log('piatti selezionati', this.store.selectedDishes)
                }
                else{
                    const indexToRemove = this.store.selectedDishes.indexOf(dish);
                    if (indexToRemove !== -1) {

                        delete dish['quantity'];
                        this.store.selectedDishes.splice(indexToRemove, 1);
                    }
                }

                this.saveCartToLocalStorage()

            },

            saveCartToLocalStorage() {
                
                localStorage.setItem('cart', JSON.stringify(this.store.selectedDishes));
            },

            getFromLocalStorage(){

                if(localStorage.getItem('cart')){

                    const cart = JSON.parse(localStorage.getItem('cart'));

                    this.store.selectedDishes = cart;
                }
                
            }
        },
        mounted(){
            this.getSingleRestaurant();
            this.getFromLocalStorage();
        }
    }
</script>

<template>
    <header>
        <RestaurantListHeader/>
    </header>
    <main>

        <section>

            <div class="single-restaurant" v-if="currentSingleRestaurant && currentSingleRestaurant.img != null">
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

                <div class="menu-container">
                    <div v-if="currentSingleRestaurant && currentSingleRestaurant.address != null" class="restaurant-info">
                        <span><i class="fa-solid fa-location-dot"></i></span> <strong>{{ currentSingleRestaurant.address }}</strong>
                    </div>
                    
                    <div class="mycontainerinoverflow">
                        <div class="dish-container">
                            <div class="dish" v-for="(dish, i) in currentSingleRestaurant.dishes" v-if="currentSingleRestaurant != null">

                                <div class="img-container">
                                    <img :src="'http://127.0.0.1:8000/storage/' + dish.img" :alt="dish.name">
                                </div>

                                <div class="card-body">

                                    <h4>
                                        {{ dish.name }}
                                    </h4>


                                    <div class="button-container">
                                        <div>
                                            <h6 class="price p-2">
                                                <strong>{{dish.price + '€'}}</strong>
                                            </h6>
                                        </div>

                                        <button @click="selectDishes(dish, i)" 
                                        :class="{
                                            'trash' : this.store.selectedDishes.includes(dish),
                                        }"
                                        >

                                        <span v-if="!this.store.selectedDishes.includes(dish)">
                                            <i class="fa-solid fa-plus"></i>
                                        </span>
                                            <div v-if="!this.store.selectedDishes.includes(dish)" class="carticon">
                                                <i class="fa-solid fa-plus"></i>
                                            </div>

                                            <div v-else class="carticon">
                                                <i class="fa-solid fa-minus"></i>
                                            </div>
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
            height: 60%; 
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

    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 100px;
    border-radius: 44px;
    .menu-container{

        border-radius: 40px;
        width: 70%;
        padding: 40px 20px 20px 20px;
        height: 1000px;
        overflow-y: auto;
        -webkit-box-shadow: 0px 22px 54px -11px rgba(0,0,0,0.56);
        -moz-box-shadow: 0px 22px 54px -11px rgba(0,0,0,0.56);
        box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.473);
            .restaurant-info{
            padding: 25px;
            i{
                color:red;
            }
        }
            
        .dish-container{
            width: 100%;
            display: flex;
            flex-wrap: wrap;

        .dish{

            width: calc(100% / 3 - 60px);
            margin: 15px 30px;
            height: 370px;
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            .img-container{

                position: absolute;
                bottom: 0;
                width: 100%;
                top: 0;
                img{

                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }

            .card-body{
                position: absolute;
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 15px; 
                justify-content: end;
                padding: 20px;
                color: white;
                background: rgb(0,0,0);
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0, 0, 0, 0.471) 48%, rgba(0, 0, 0, 0) 100%);
                
                h3{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                .button-container{

                        align-items: center;
                        display: flex;
                        button{

                            padding: 8px 0;
                            border-radius: 20px;
                            border: 0;
                            background-color: #3498db;
                            color: white;
                            width: 100%;
                            height: 100%;
                            transition: all .2s ease-in;
                            &.trash{

                                color: #3498db;
                                background-color: white;
                            }
                        }
                    }
                }
            }
        }
    }
}




</style>
