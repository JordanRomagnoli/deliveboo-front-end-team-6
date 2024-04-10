<script>
    //import Axios from 'axios';
    import { store } from '../../store.js';

    export default {
        data() {
            return {
                store,                 
            }
        },
        methods:{
            addQuantity(dish){                

                dish['quantity'] ++;
            },

            removeQuantity(dish){                

                if(dish['quantity'] > 1){
                    dish['quantity'] --;
                }
                else {
                    
                    const index = this.store.selectedDishes.indexOf(dish);
                    if (index !== -1) {
                        this.store.selectedDishes.splice(index, 1);

                        console.log('piatti selezionati', this.store.selectedDishes)
                    }
                }
            },
        },
        computed: {
            totalPrice() {
                
                this.store.selectedDishes.forEach(dish => {
                    
                    //this.store.totalPrice += dish.price;
                });
                return this.store.totalPrice;
            }
        },
    }
    </script>

<template>
    <div>
        <div class="cart">
            <div class="dish-list">
                <div v-for="(singleDish, i) in store.selectedDishes" class="dish">
                    <div class="left">
                        <h3>
                            {{ singleDish.name }}
                        </h3>
                    </div>

                    <div class="right">
                        <div class="quantity">
                            <button @click="removeQuantity(singleDish)" class="plus">
                                -
                            </button>
                            <span v-if="singleDish.quantity">
                                {{ singleDish.quantity }}
                            </span>
                            <button @click="addQuantity(singleDish)" class="minus">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="final-price">
                <span>
                    {{ totalPrice+'€' }}
                    <!-- {{ store.totalPrice }} -->
                </span>
            </div>
        </div>

        <button>
            Esegui checkout
        </button>
    </div>
</template>

<style lang="scss" scoped>
    div{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        //justify-content: space-between;
        width: 25%;
        .cart{

            min-height: 20%;
            height: auto;
            max-height: calc(100% - 60px);
            margin-bottom: 32px;
            width: 100%;
            //border: 1px solid black;
            border-radius: 40px;
            display: flex;
            padding: 0 20px;
            overflow: hidden;
            -webkit-box-shadow: 0px 22px 54px -11px rgba(0,0,0,0.56);
            -moz-box-shadow: 0px 22px 54px -11px rgba(0,0,0,0.56);
            box-shadow: 0px 22px 54px -11px rgba(0,0,0,0.56);
            .dish-list{
                
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                justify-content: start;
                width: 100%;
                height: 100%;
                //background-color: aqua;
                //max-height: 800px;
                padding: 8px;
                padding-top: 32px;
                .dish{

                    width: 100%;
                    //background-color: aqua;
                    padding: 12px 24px;
                    height: 80px;
                    margin-bottom: 24px;
                    border-radius: 45px;
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    overflow: hidden;
                    background-color: rgba(196, 196, 196, 0.333);
                    .left{

                        height: 100%;
                        flex-grow: 1;
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        align-items: center;
                        h3{
                            margin: 0;
                            font-size: 1.1rem;
                        }
                    }

                    .right{
                        
                        height: 100%;
                        width: 25%;
                        .quantity{
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            .plus, .minus{

                                font-size: 1.5rem;
                                padding: 0;
                                width: 20px;
                                height: 20px;
                                background-color: transparent;
                                line-height: 20px;
                                color: black;
                            }

                            span{

                                font-size: 1.5rem;

                            }   
                        }
                    }
                }
            }
            
            .final-price{

                padding: 16px;
                height: auto;
                span{

                    font-size: 1.9rem;
                }
            }
        }

        button{

            border-radius: 10px;
            background: #3498db;
            color: white;
            border: none;
            width: 100%;
            height: 60px;
        }
    }
</style>
