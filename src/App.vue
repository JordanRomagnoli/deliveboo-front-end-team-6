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
</style>
