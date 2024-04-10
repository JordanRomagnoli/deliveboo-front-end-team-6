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
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="notify">
                </div>
            </button>

            <a href="http://127.0.0.1:8000" class="member" target="_blank">
                Accedi come membro
            </a>

            <a href="http://127.0.0.1:8000" class="user" target="_blank">
                <i class="fa-solid fa-user"></i>
            </a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '../../assets/scss/Home/home-header.scss' as *;
</style>
