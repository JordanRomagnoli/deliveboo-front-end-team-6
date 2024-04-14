<script>
    import HomeHeader from '../components/Home/HomeHeader.vue';
    import OrderForm from '../components/OrderForm/OrderForm.vue';

    export default {
        data() {
            return { 
                
            }
        },
        components: {
            HomeHeader,
            OrderForm

        },
    }
    </script>

<template>
    <header>
        <HomeHeader/>
    </header>
    <main>
        <OrderForm/>
    </main>
    
</template>

<style lang="scss" scoped>
   
</style>
