<script>
    import Axios from 'axios';

    export default {
        data() {
            return { 
                restaurant: null,
            }
        },
        methods: {
            getSingleRestaurant() {
                Axios.get("http://127.0.0.1:8000/api/restaurant/" + this.$route.params.slug)
                .then(response => {
                    console.log(response);
                    console.log(this.$route.params.slug);
                });
            }
        },
        created(){
            this.getSingleRestaurant();
        }
    }
</script>

<template>
    <section>
        <div class="restaurant-container">
            NO VABBE
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>
