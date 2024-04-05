<script>
    import Axios from 'axios';

    export default {
        data() {
            return { 
                restaurants: [],
                typologies: [],
                currentPage: 1,  
                lastPage: 1,
            }
        },
        created(){
        this.getRestaurants(this.currentPage);
        this.getTypologies();
        },
        methods: {
        getRestaurants(page){
            Axios.get('http://127.0.0.1:8000/api/restaurant',{
                params:{
                page: page
            }
            })
            .then(res =>{
                console.log(res.data,"ristorante");
                this.restaurants = res.data.results.data;
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            });
        },
            getTypologies() {
            Axios.get('http://127.0.0.1:8000/api/typology')
            .then(res => {
                console.log(res.data,"tipologia");
                this.typologies = res.data.typologies; 
            });
            },
            prevPage() {
                if (this.currentPage > 1) {
                this.getRestaurants(this.currentPage - 1)
                }
            },
            nextPage() {
                if (this.currentPage < this.lastPage) {
                this.getRestaurants(this.currentPage + 1)
                }
            }
        }
    }
</script>

<template>
    
    <div class="mycontainer">
        <div class="p-4">
            carosello tipologie img
        </div>
        <div class="containerflex">
            <div v-for="restaurant in restaurants" :key="restaurant.id" class="myrestaurantcard">
                <div v-if="restaurant.img !=null">
                    <img :src="'http://127.0.0.1:8000/storage/' + restaurant.img" :alt="restaurant.company_name">
                </div>
                <div class="myrestaurantcardbody">
                    <h2>
                        {{ restaurant.company_name }}
                    </h2> 
                    <h6 v-for="typology in restaurant.typologies" :key="typology.id">
                        Ristorante: {{ typology.name }}
                    </h6>
                    <!-- <button class="specialbutton">
                        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug } }" class="btn btn-primary">
                            Vedi post completo 
                        </router-link>
                    </button> -->
                </div>
            </div>
            <div class="button p-4">
                <button @click="prevPage()">
                    Precedente
                </button>
            </div>
            <div class="button p-4">
                <button @click="nextPage()">
                    Successivo
                </button>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../../assets/scss/footer.scss' as *;

    .mycontainer{
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 40px;
    }

    .containerflex{
        display: flex;
        justify-content: space-between;
        align-items: center; 
        flex-wrap:wrap;
    }

    .myrestaurantcard{
        // border: 2px solid black;
        height: 300px; 
        width: calc(100% / 3 - 20px);
        padding: 10px;
        margin: 10px;
        border-radius: 20px;
        position: relative;
        box-shadow: 10px 10px 5px rgba(211, 211, 211, 0.613);

        &>img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .myrestaurantcardbody{
        position: absolute;
        bottom: 0;
        }

        .button {
        background-color: #008CBA;
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


        .button:hover {
        background-color: white;
        color: #008CBA;
        border:1px solid #008CBA;
        }
    }


</style>
