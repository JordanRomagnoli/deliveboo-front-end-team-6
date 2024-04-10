<script>
    import { store } from '../../store.js';
    import Axios from 'axios';


    export default {
        data() {
            return {
                store,   
            }
        },
        methods:{

            selectTypology(typology, i){

                if(!this.store.selectedTypology.includes(typology)){

                    this.store.selectedTypology.push(typology);
                }
                else{
                    const indexToRemove = this.store.selectedTypology.indexOf(typology);
                    if (indexToRemove !== -1) { // Assicurati che l'elemento sia stato trovato
                        this.store.selectedTypology.splice(indexToRemove, 1); // Rimuovi l'elemento dall'array
                    }
                }
                
                this.getRestaurantByTypology();
                //console.log(this.store.selectedTypology)
            },

            getRestaurantByTypology(){
                Axios.get("http://127.0.0.1:8000/api/restaurant", {
                    params: {
                        typologies: this.store.selectedTypology,
                    },
                }).then((res) => {
                    
                    if(this.store.selectedTypology.length > 0){

                        this.store.restaurantPreview = res.data.results.data;
                        console.log(res)
                        console.log(this.store.restaurantPreview)

                    }else{

                        this.store.restaurantPreview = [];

                    }
                });

            },

        },
        components:{
           
        },
        setup() {
            return {
                
            };
        },
        mounted(){
            
        }
    }
    </script>

<template>
    
    <div class="container-tipology">
        <span class="single-typology"  @click="selectTypology(elem.name, i)" v-for="(elem, i) in store.typologies" :key="i" :class="{
            'selected' : store.selectedTypology.includes(elem.name),
        }">
            {{ elem.name }}
        </span>
    </div>

</template>

<style lang="scss" scoped>

/* Regole CSS per dispositivi con larghezza massima di 600px */
@media only screen and (max-width: 600px) {
  
}
  
/* Regole CSS per dispositivi con larghezza minima di 600px */
@media only screen and (min-width: 600px) {

}


/* Regole CSS per dispositivi con larghezza minima di 768px */
@media only screen and (min-width: 768px) {

}

/* Regole CSS per dispositivi con larghezza minima di 992px */
@media only screen and (min-width: 992px) {

}

/* Regole CSS per dispositivi con larghezza minima di 1200px */
@media only screen and (min-width: 1200px) {

}

@media only screen and (min-width: 1400px) {

    .container-tipology{

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 40%;
        .single-typology{
            text-align: center;
            display: block;
            color: white;
            margin: 16px 8px;
            border: 1px solid white;
            border-radius: 21px;
            padding: 8px 16px;
            &.selected{
                
            }
        }
    }

}
</style>
