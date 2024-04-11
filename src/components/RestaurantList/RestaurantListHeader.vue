<script>
    import { RouterLink } from 'vue-router';
    import { store } from '../../store.js';
    import Axios from 'axios';



    export default {
        data() {
            return { 
                store,
            }
        },
        computed: {
            inputHomeWithoutSpaces: function() {
                return this.store.InputHome.replace(/\s/g, "");
            }
        },
        methods:{

            getImagePath: function (imgPath) {
                return new URL(imgPath, import.meta.url).href;
            },

            navigateToList() {
                
                if (this.inputHomeWithoutSpaces === '' && this.store.selectedTypology.length === 0) {

                } else {
                    
                    this.$router.push({ name: 'list' });
                }
            },

            getImageRestaurant(){

                const slug = store.InputHome.replace(/ /g, '-').toLowerCase();

                Axios.get("http://127.0.0.1:8000/api/restaurant", {
                    params: {
                        page: 1,
                        slug: slug,
                        typologies: store.selectedTypology,
                    },
                }).then((res) => {
                    store.currentRestaurants = res.data.results.data;
                    console.log(res)
                });
                next()
            }
        }
    }
    </script>

<template>
    <div class="header"> 
        
        <div class="img-container">
            <router-link :to="{ name: 'home' }">
                <img src="..\..\assets\img\logo-restaurant-list-page.png" alt="">
            </router-link>
        </div>

        <!-- <div class="input-container">
            <input v-model="store.InputHome" type="text" @keyup.enter="navigateToList()" placeholder="Nome Ristorante">
            <button :class="{
                'disable': inputHomeWithoutSpaces == '' && store.selectedTypology.length === 0,
            }"
            >
                
                <span v-if=" inputHomeWithoutSpaces == '' && store.selectedTypology.length === 0">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>

                <span @click="getImageRestaurant()" v-else>
                    Cerca
                </span>
            </button>
        </div> -->
        
        <nav>
            <button class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="notify">
                </div>
            </button>

            <a href="http://127.0.0.1:8000" target="_blank">
                Accedi come membro
            </a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .header{
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding: 16px 32px;
    align-items: center;
    position: fixed;
    top: 0; 
    right: 0;
    left: 0;
    background-color: #999;    
    background: linear-gradient(to bottom, rgba(153, 153, 153, 0.43), rgba(153, 153, 153, 0));
    backdrop-filter: blur(2.6px);
    .img-container{

        width: 100px;
        height: 60px;
            img{
                height: 100%;
                width: 100%;
            }
    }

    .input-container{

        width: 30%;
        background-color: white;
        height: 56px;
        border-radius: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px 0 16px;
        overflow: hidden;
        input{
            width: 80%;
            height: 100%;
            border: none;
            outline: none !important;
            box-shadow: none !important;
        }
        button{
            width: 15%;
            height: 40px;
            border-radius: 19px;
            border: none;
            font-weight: 500;
            background-color: #6aaed7;
            transition: all .3s ease-in-out;
            &.disable{
                width: 40px;
            }
            >*{
                width: 100%;
                color: white;
                text-decoration: none;
            }
        }
    }
    
    nav{

        display: flex;
        .cart{

            width: 35px;
            height: 35px;
            border: none;
            margin-right: 11px;
            position: relative;    
            background-color: #b9b9b9b0;  
            color: white;
            .notify{
                position: absolute;
                top: -5.5px;
                right: -5.5px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: aqua;
            }
        }

        a{
            display: block;
            background-color: #b9b9b9b0;
            height: 35px;
            line-height: 35px;
            padding: 0 16px;
            text-decoration: none;
            text-transform: uppercase;
            color: white;
            font-weight: 600;
        }
    }
}
</style>
