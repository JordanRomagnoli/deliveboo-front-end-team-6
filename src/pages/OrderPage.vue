<script>
    import HomeHeader from '../components/Home/HomeHeader.vue';
    import OrderForm from '../components/OrderForm/OrderForm.vue';
    import RestaurantListHeader from '../components/RestaurantList/RestaurantListHeader.vue';

    export default {
        data() {
            return { 
                
            }
        },
        components: {
            RestaurantListHeader,
            OrderForm

        },
    }
    </script>

<template>
    <header>
        <RestaurantListHeader/>
    </header>
    <main>
        <OrderForm/>
    </main>
    
</template>

<style lang="scss" scoped>
   
</style>
