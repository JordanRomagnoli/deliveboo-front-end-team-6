<script>
    import HomeHeader from '../components/Home/HomeHeader.vue';
    import HomeMain from '../components/Home/HomeMain.vue';
    import HomeFooter from '../components/Home/HomeFooter.vue';

    export default {
        data() {
            return { 
                
            }
        },
        components: {

            HomeHeader,
            HomeMain,
            HomeFooter
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
    <footer>
        <HomeFooter/>
    </footer>
</template>

<style lang="scss" scoped>
   
</style>
