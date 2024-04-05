<script>
    import HomeHeader from '../components/Home/HomeHeader.vue';
    import HomeMain from '../components/Home/HomeMain.vue';

    export default {
        data() {
            return { 
                
            }
        },
        components: {

            HomeHeader,
            HomeMain,
        },
    }
    </script>

<template>
    <header>
        <HomeHeader/>
    </header>
    <main>
        <HomeMain/>
    </main>
</template>

<style lang="scss" scoped>
   
</style>
