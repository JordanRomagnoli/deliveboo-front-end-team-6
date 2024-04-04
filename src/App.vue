<script>

/*
    Importazione componente
*/
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import Axios from 'axios';
import { store } from './store';

export default {
    data() {
        return { 
            
            store
            
        }
    },
    /*
        Dichiarazione dei componenti all'interno dell'oggetto
    */
    components: {

        AppHeader,
        AppMain,
        AppFooter
    },
}
</script>

<template>
    <div>
        
        <header>
            <AppHeader/>
        </header>
        <main>
            <AppMain/>
        </main>
        <footer>
            <AppFooter/>
        </footer>
        
    </div>
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";
</style>
