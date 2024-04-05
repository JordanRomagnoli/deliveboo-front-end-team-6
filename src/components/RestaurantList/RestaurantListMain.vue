<script>
    import Axios from 'axios';

    export default {
        data() {
            return { 
                restaurants: [],
                currentPage: 1,  
                lastPage: 1,
            }
        },
        created(){
        this.getRestaurants(this.currentPage)
        },
        methods: {
        getRestaurants(page){
            Axios.get('http://127.0.0.1:8000/api/restaurant',{
                params:{
                page: page,
            }
            })
            .then(res =>{
                console.log(res.data);
                this.restaurants = res.data.results.data;
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
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
    <!-- <main class="main-title">
        
    </main> -->
    <div class="mycontainer">
        <div v-for="restaurant in restaurants" :key="restaurant.id" class="myrestaurantcard">
            <div v-if="restaurant.img !=null">
              <img :src="'http://127.0.0.1:8000/storage/' + restaurant.img" :alt="restaurant.company_name">
            </div>
            <h2>
              {{ restaurant.company_name }}
            </h2> 
            <li v-for="typologies in restaurant.typology" :key="typology.id">
                Ristorante: {{ typology.name }}
            </li>       
        </div>
        <div class="sectionpage">
            <button @click="prevPage()">
                Precedente
            </button>
            <button @click="nextPage()">
                Successivo
            </button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../../assets/scss/footer.scss' as *;
    .mycontainer{
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 30px;
    }

</style>
