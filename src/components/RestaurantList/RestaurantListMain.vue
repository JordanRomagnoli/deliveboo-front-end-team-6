<script>
import Axios from "axios";
import { store } from '../../store.js';

export default {
    data() {
        return {
            store,
            currentPage: 1,
            lastPage: 2,
        };
    },
    methods: {
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
            console.log(this.currentPage, "ultima pagina");
        },
    },
};
</script>

<template>
    <div class="mycontainer">
        <div class="p-4">carosello tipologie img</div>
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
                    <h6 v-for="typology in restaurant.typologies" :key="typology.id" class="mybadge" > 
                        {{ typology.name }}
                    </h6>
                </div>
            </div>
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
@use "../../assets/scss/footer.scss" as *;

.mycontainer {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 40px;
    padding-top: 120px;
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
    box-shadow: 10px 10px 5px rgba(211, 211, 211, 0.613);
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

.mybadge{
    width: 100%;
    color: white;
    background-color: #3498db;
    border-radius: 20px;
    display: inline;
    padding: 2px 6px;
    font-size: 12px;
    
}
</style>
