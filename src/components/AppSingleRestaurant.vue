<script>
    export default {
        data() {
            return { 
                restaurant: null,
            }
        },
        methods: {
            getSingleRestaurant() {
                axios.get('http://127.0.0.1:8000/api/restaurant'+ this.$route.params.slug)
                    .then(response => {
                        console.log(response.data);
                    }
                )
            },
        }
    }
    </script>

<template>
    <section>
        <div class="restaurant-container">
            
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
</style>
