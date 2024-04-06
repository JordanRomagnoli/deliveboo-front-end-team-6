<script>
import AppFooter from './components/AppFooter.vue';


import { store } from './store';

export default {
    data() {
        return { 
            store
        }
    },
    components: {
        AppFooter,
    },
    
}
</script>

<template>
    <router-view></router-view>
    <footer>
        <AppFooter/>
    </footer>
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";

    *{
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-style: normal;
        ::-webkit-scrollbar {
            width: 5px;
        }
        
        ::-webkit-scrollbar-track {
            background-color: #cccccc;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #000000;
        }
    }
</style>
