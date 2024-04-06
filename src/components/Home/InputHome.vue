<script>
    import Axios from 'axios';

    export default {
        data() {
            return { 
                carousell: [
                    'burger.jpg',
                    'pizza.jpg',
                    'salad.jpg',
                    'soup.jpg',
                    'taco.jpg',
                ],
            }
        },
        methods:{

            getImagePath: function (imgPath) {
                return new URL(imgPath, import.meta.url).href;
            },

        }
    }
    </script>

<template>

    <div class="input">
        <h1>
            Cerca il tuo ristorante ...
        </h1>
        <div class="input-container">
            <input type="text" placeholder="Nome Ristorante">
            <button>
                Cerca
            </button>
        </div>
    </div>
                
</template>

<style lang="scss" scoped>

.input{
                
    width: 25%;
    height: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
        color: white;
        font-weight: 700;
        margin-bottom: 20px;
    }
    .input-container{

        width: 100%;
        background-color: white;
        height: 56px;
        border-radius: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px 0 16px;
        overflow: hidden;
        input{
            width: 80%;
            height: 100%;
            border: none;
            outline: none !important;
            box-shadow: none !important;
        }
        button{
            width: 15%;
            height: 40px;
            border-radius: 19px;
            border: none;
            font-weight: 500;
            background-color: #6aaed7;
            color: white;
            
        }
    }
}

</style>
