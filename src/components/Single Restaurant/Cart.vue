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
                            Nome Piatto
                        </h3>
                    </div>

                    <div class="right">
                        <div class="quantity">
                            <button class="plus">
                                +
                            </button>
                            <span id="quantity_{{ i }}">
                                1
                            </span>
                            <button class="minus">
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="final-price">
                <span>
                    <!-- Prezzo totale -->
                    {{ store.totalPrice }}
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
            border: 1px solid black;
            border-radius: 40px;
            display: flex;
            padding: 0 20px;
            overflow: hidden;
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
                    height: 90px;
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
                        //background-color: bisque;
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        align-items: center;
                        h3{
                            margin: 0;
                            font-size: 1.2rem;
                        }
                    }

                    .right{
                        
                        height: 100%;
                        width: 20%;
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
