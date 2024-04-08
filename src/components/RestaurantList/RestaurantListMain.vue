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
            <div v-for="(restaurant, i) in store.currentRestaurants" :key="i" class="myrestaurantcard">
                <div v-if="restaurant.img != null" class="myrestaurantimg">
                    <img :src="'http://127.0.0.1:8000/storage/images/' + restaurant.img" :alt="restaurant.company_name"
                    />
                </div>
                <div class="myrestaurantcardbody p-4">
                    <h2 class="text-h2">
                        {{ restaurant.company_name }}
                    </h2>
                    <!-- <button class="specialbutton">
                        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="btn btn-primary">
                            Vedi post completo 
                        </router-link>
                    </button> -->
                </div>
                <div class="badge" >
                    <h6 v-for="typology in restaurant.typologies" :key="typology.id">
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

.myrestaurantcard {
    height: 200px;
    width: calc(100% / 3 - 40px);
    margin: 20px;
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
        opacity: 0.9;
        filter: blur(1px);
    }
    .myrestaurantcardbody {
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        bottom: 10%;
        padding: 0 !important;
        .text-h2 {
            text-shadow: 2px 2px 4px rgba(211, 211, 211, 0.613);
            color: white;
            text-align: center;
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
</style>
