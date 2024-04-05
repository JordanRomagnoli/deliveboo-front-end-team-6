<script>

/*
    Importazione componente
*/

import { store } from './store';

export default {
    data() {
        return { 
            
            store
            
        }
    }
    /*
        Dichiarazione dei componenti all'interno dell'oggetto
    */
    
}
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";
</style>
