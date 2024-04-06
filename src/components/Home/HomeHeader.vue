<script>
    export default {
        data() {
            return { 
                 
            }
        },
    }
    </script>

<template>
    <div class="header"> 
        <div class="img-container">
             <img src="..\..\assets\img\logo-header-home-page.png" alt="">
        </div>
        
        <nav>
            <button class="cart">
                <div class="notify">
                </div>
            </button>

            <a href="">
                Accedi come membro
            </a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/scss/Home/home-header.scss' as *;
</style>
