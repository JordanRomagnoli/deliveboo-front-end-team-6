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
    
            </div>
            
            <div class="final-price">
                <span>
                    <!-- Prezzo totale -->
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
        
        .cart{

            .dish-list{
    
            }
            
            .final-price{

                span{

                }
            }
        }

        button{

        }
    }
</style>
