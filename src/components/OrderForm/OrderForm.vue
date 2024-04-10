<script>
import { store } from '../../store';
import Axios from 'axios';

export default {
    data() {
        return { 
            store,
            name: '',
            lastName: '',
            address: '',
            phone: '',
            email: '',
            success: false,
        }
    },
    components: {

    },
    methods: {
        submitOrder() {
            if(
                this.name != null && this.name != '' && this.name.length <= 128
                // &&
                // this.lastName != null && this.lastName != '' && this.lastName.length <= 128
                // &&
                // this.address != null && this.address != '' && this.address.length <= 128
                // &&
                // this.phone != null && this.phone != '' && this.phone.length <= 20
                // &&
                // this.email != null && this.email != ''
            ){
                Axios.post("http://127.0.0.1:8000/api/orders/", {
                    customer_name: this.name,
                    customer_lastname: this.lastName,
                    customer_address: this.address,
                    customer_phone: this.phone,
                    customer_email: this.email,
                    customer_total_price: this.store.totalPrice,

                })
                .then(response => {
                    this.success = response.data.success;
                    console.log(response.data);
                })
                .catch((error) => {
                    alert('ERRORE : dati non validi');
                });
            }
            else{
                alert('Inserisci dati validi');
                console.log(this.name);
                console.log(this.lastName);
                console.log(this.address);
                console.log(this.phone);
                console.log(this.email);
            }
        },
    }
    
}
</script>

<template>

    <main class="form-container">
        <section class="form-container">
            <form v-if="success != true" method="POST" @submit.prevent="submitOrder()">
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Nome
                    </label>
                    <input type="text" id="name" v-model="name" name="name" placeholder="Inserisci il tuo nome" maxlength="128" required class="form-control">
                </div>
                <div class="mb-3">
                    <label for="lastname" class="form-label">
                        Cognome
                    </label>
                    <input type="text" id="lastname" v-model="lastName" name="lastName" placeholder="Inserisci il tuo cognome" maxlength="128" required class="form-control">
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">
                        Indirizzo
                    </label>
                    <input type="text" id="address" v-model="address" name="address" placeholder="Inserisci il tuo indirizzo" maxlength="128" required class="form-control">
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">
                        Inserisci il tuo numero di telefono
                    </label>
                    <input type="number" id="phone" v-model="phone" name="phone" placeholder="Inserisci il tuo numero di telefono" maxlength="20" required class="form-control">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">
                        Indirizzo email
                    </label>
                    <input type="email" id="email" v-model="email" name="email" placeholder="Inserisci la tua eamil" required class="form-control" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">
                        Non condivideremo la tua email con nessuno
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Esegui il checkout
                </button>
            </form>
            <div v-else>
                <div>
                    Messaggio inviato correttamente
                </div>
            </div>
        </section>
    </main>


    
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";

    // .form_container {
    //     padding: 100px;
    // }


</style>
