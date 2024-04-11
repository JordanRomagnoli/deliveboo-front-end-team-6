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

            formValidation: [
                {
                    'name': 'nameInput',
                    'check': false
                },
                {
                    'name': 'lastNameInput',
                    'check': true
                },
                {
                    'name': 'addressInput',
                    'check': true
                },
                {
                    'name': 'phoneInput',
                    'check': true
                },
            ]
        }
    },
    components: {

    },
    methods: {

        saveCartToLocalStorage() { // *
            localStorage.setItem('cart', JSON.stringify(this.store.selectedDishes));
        },

        submitOrder() {
            if(
                this.name != null && this.name != '' && this.name.length <= 128
                &&
                this.lastName != null && this.lastName != '' && this.lastName.length <= 128
                &&
                this.address != null && this.address != '' && this.address.length <= 128
                &&
                this.phone.toString() != null && this.phone.toString() != '' && this.phone.toString().length <= 20
                &&
                this.email != null && this.email != ''
            ){
                Axios.post("http://127.0.0.1:8000/api/orders/", {
                    customer_name: this.name,
                    customer_lastname: this.lastName,
                    customer_address: this.address,
                    customer_phone: this.phone.toString(),
                    customer_email: this.email,
                    customer_total_price: this.store.totalPrice,
                    dishes: this.store.selectedDishes
                })
                .then(response => {
                    this.success = response.data.success;
                    this.store.selectedDishes = [];
                    this.saveCartToLocalStorage();
                })
                .catch((error) => {
                    alert('ERRORE : dati non validi');
                });
            }
            else{
                alert('Inserisci dati validi');
            }

            this.validationCheck();
        },
        // validationForm(){
        //     let max_letters = document.querySelector(".max-letters");
        //     //let phone_max_letters = document.querySelector(".phone_max_letters");
        //     let warning = document.querySelector(".warning");

        //     max_letters.addEventListener("input", function(){
        //         if (max_letters.value.length > 128 && max_letters.value.length < 3) {
        //             warning.classList.remove('d-none');
        //         }
        //         else{
        //             warning.classList.add('d-none'); 
        //         }
        //     });

        //     // phone_max_letters.addEventListener("input", function(){
        //     //     if (phone.length > 20 && max_letters.value.length < 6) {
        //     //         warning.classList.remove('d-none');
        //     //     }
        //     //     else{
        //     //         warning.classList.add('d-none'); 
        //     //     }
        //     // })
        // },
        validationCheck(){
            if (this.name > 128 && this.name < 3) {
                this.formValidation[0].check = true
            }
            if (this.lastName > 128 && this.lastName < 3) {
                this.formValidation[1].check = true
            }
            if (this.address > 128 && this.address < 3) {
                this.formValidation[2].check = true
            }
            if (this.phone > 20 && this.phone < 6) {
                this.formValidation[3].check = true
            }
        }
    }
    
}
</script>

<template>

    <main>
        <section class="form-container">
            <form v-if="success != true" method="POST" @submit.prevent="submitOrder()">
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Nome
                    </label>
                    <input type="text" id="name" v-model="name" name="name" placeholder="Inserisci il tuo nome" maxlength="128" minlength="3" required class="max-letters form-control">
                    <div v-if="name.length > 128" class="warning">
                        <span>
                            Inserisci un minimo di 3 caratteri e un massimo di 128 caratteri
                        </span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="lastname" class="form-label">
                        Cognome
                    </label>
                    <input type="text" id="lastname" v-model="lastName" name="lastName" placeholder="Inserisci il tuo cognome" maxlength="128" minlength="3" required class="max-letters form-control">
                    <div class="warning d-none">
                        <span>
                            Inserisci un minimo di 3 caratteri e un massimo di 128 caratteri
                        </span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">
                        Indirizzo
                    </label>
                    <input type="text" id="address" v-model="address" name="address" placeholder="Inserisci il tuo indirizzo" maxlength="128" minlength="3" required class="max-letters form-control">
                    <div class="warning d-none">
                        <span>
                            Inserisci un minimo di 3 caratteri e un massimo di 128 caratteri
                        </span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">
                        Inserisci il tuo numero di telefono
                    </label>
                    <input type="number" id="phone" v-model="phone" name="phone" placeholder="Inserisci il tuo numero di telefono" maxlength="20" minlength="6" required class="phone_max_letters form-control">
                    <div v-if="phone.length > 20 || phone.length < 6 " class="warning">
                        <span>
                            Inserisci un minimo di 6 caratteri e un massimo di 20 caratteri // Inserisci un numero di telefono valido
                        </span>
                    </div>
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
                    Ordire inviato correttamente
                </div>
            </div>
        </section>
    </main>


    
</template>

<style lang="scss">
    .form-container {
        padding: 100px 50px;
    }

    .warning {
        color: red;
    }
</style>
