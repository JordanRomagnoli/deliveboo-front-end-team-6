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
    border: 1px solid black;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h1{
        color: white;
        font-weight: 700;
    }
    .input-container{

        width: 100%;
        background-color: white;
        height: 56px;
        border-radius: 28px;
        overflow: hidden;
        input{
            width: 80%;
            height: 100%;
            border: none;
            :focus-visible {
                outline: 2px solid var(--bs-primary); /* Evidenzia l'elemento con un bordo di 2px solid del colore primario */
            }
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
