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
             <img src="..\..\assets\img\logo-restaurant-list-page.png" alt="">
        </div>
        
        <nav>
            <button class="cart">
                <i class="fa-solid fa-cart-shopping"></i>
                <div class="notify">
                </div>
            </button>

            <a href="http://127.0.0.1:8000" target="_blank">
                Accedi come membro
            </a>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .header{
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding: 16px 16px;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    backdrop-filter: blur(2.6px);
    .img-container{

        width: 100px;
        height: 60px;
            img{
                height: 100%;
                width: 100%;
            }
    }
    
    nav{

        display: flex;
        .cart{

            width: 35px;
            height: 35px;
            border: none;
            margin-right: 11px;
            position: relative;    
            background-color: #b9b9b9b0;  
            color: white;
            .notify{
                position: absolute;
                top: -5.5px;
                right: -5.5px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: aqua;
            }
        }

        a{
            display: block;
            background-color: #b9b9b9b0;
            height: 35px;
            line-height: 35px;
            padding: 0 16px;
            text-decoration: none;
            text-transform: uppercase;
            color: white;
            font-weight: 600;
        }
    }
}
</style>
