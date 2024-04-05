<script>

    import RestaurantListHeader from '../components/RestaurantList/RestaurantListHeader.vue';
    import RestaurantListMain from '../components/RestaurantList/RestaurantListMain.vue';

    export default {
        data() {
            return { 
                
            }
        },
        components: {
            RestaurantListHeader,
            RestaurantListMain
        },
    }
    </script>

<template>
    <header>
        <RestaurantListHeader/>
    </header>
    <header>
        <RestaurantListMain/>
    </header>
</template>

<style lang="scss" scoped>
   
</style>
