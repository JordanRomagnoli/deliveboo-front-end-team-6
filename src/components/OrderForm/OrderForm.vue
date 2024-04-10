<script>
import { store } from '../../store';

export default {
    data() {
        return { 
            store,
            name: '',
            lastName: '',
            email: '',
            success: false,
        }
    },
    components: {

    },
    methods: {
        getOrder() {
            if(
                this.name != null && this.name != '' && this.name.length <= 64
                &&
                this.email != null && this.email != '' && this.name.length <= 255
                &&
                this.message.length <= 2048
            ){
                Axios.post("http://127.0.0.1:8000/api/restaurant/", {
                    name: this.name,
                    lastName: this.lastName,
                    email: this.email,
                })
                .then(response => {
                    this.success = response.data.success;
                    console.log(response,data);
                })
                .catch((error) => {
                    alert('ERRORE : dati non validi');
                });
            }
        },
    }
    
}
</script>

<template>

    <main>
        <section>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Inserisci il tuo nome
                    </label>
                    <input type="name" class="form-control" id="name">
                </div>
                <div class="mb-3">
                    <label for="lastname" class="form-label">
                        Inserisci il tuo cognome
                    </label>
                    <input type="lastname" class="form-control" id="lastname">
                </div>
                <div class="mb-3">
                    <label for="phone-number" class="form-label">
                        Inserisci il tuo numero di telefono
                    </label>
                    <input type="phone-numbe" class="form-control" id="phone-numbe">
                </div>
                <div class="mb-3">
                    <label for="email1" class="form-label">
                        Indirizzo email
                    </label>
                    <input type="email" class="form-control" id="mail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">
                        Non condivideremo la tua email con nessuno
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Esegui il checkout
                </button>
            </form>
        </section>
    </main>


    
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";


</style>
