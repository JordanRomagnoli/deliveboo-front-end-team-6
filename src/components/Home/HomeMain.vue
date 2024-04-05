<script>
    import Axios from 'axios';


    export default {
        data() {
            return { 
                 
            }
        },
        created(){
            Axios.get('http://127.0.0.1:8000/api/restaurant')
            .then(res =>{
                console.log(res);
            })
        }
    }
    </script>

<template>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
</style>
