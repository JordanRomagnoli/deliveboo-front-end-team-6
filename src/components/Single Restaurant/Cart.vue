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

                    </div>

                    <div class="right">

                    </div>
                </div>
            </div>
            
            <div class="final-price">
                <span>
                    <!-- Prezzo totale -->
                    sdasd
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
        justify-content: space-between;
        width: 25%;
        .cart{

            height: 80%;
            margin-bottom: 32px;
            width: 100%;
            border: 1px solid black;
            border-radius: 30px;
            display: flex;
            overflow: hidden;
            .dish-list{
                
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                justify-content: start;
                //background-color: aqua;
                width: 100%;
                padding: 8px;
                padding-top: 32px;
                .dish{

                    width: 100%;
                    background-color: aqua;
                    //padding: 12px 24px;
                    height: 60px;
                    margin-bottom: 16px;
                    border-radius: 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: start;
                    overflow: auto;
                    .left{

                        height: 100%;
                        flex-grow: 1;
                        background-color: bisque;
                    }

                    .right{
                        
                        height: 100%;
                        width: auto;
                        padding: 20px;
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
            background: blue;
            border: none;
            width: 100%;
            padding: 24px 0;
        }
    }
</style>
