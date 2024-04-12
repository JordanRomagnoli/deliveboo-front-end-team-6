<script>
import { store } from "../../store";
import Axios from "axios";

export default {
    data() {
        return {
            store,
            name: null,
            lastName: null,
            address: null,
            phone: null,
            email: null,
            success: false,
        };
    },
    components: {},
    methods: {

        getFromLocalStorage() {
            if (localStorage.getItem("cart")) {
                const cart = JSON.parse(localStorage.getItem("cart"));

                this.store.selectedDishes = cart;
            }
        },

        saveCartToLocalStorage() {// *
            
            localStorage.setItem(
                "cart",
                JSON.stringify(this.store.selectedDishes)
            );
        },
        submitOrder() {
            if (
                this.name != null &&
                this.name != "" &&
                this.name.length <= 128 &&
                this.lastName != null &&
                this.lastName != "" &&
                this.lastName.length <= 128 &&
                this.address != null &&
                this.address != "" &&
                this.address.length <= 128 &&
                this.phone.toString() != null &&
                this.phone.toString() != "" &&
                this.phone.toString().length <= 20 &&
                this.email != null &&
                this.email != ""
            ) {
                Axios.post("http://127.0.0.1:8000/api/orders/", {
                    customer_name: this.name,
                    customer_lastname: this.lastName,
                    customer_address: this.address,
                    customer_phone: this.phone.toString(),
                    customer_email: this.email,
                    customer_total_price: this.store.totalPrice,
                    dishes: this.store.selectedDishes,
                })
                    .then((response) => {
                        this.success = response.data.success;
                        this.store.selectedDishes = [];
                        this.saveCartToLocalStorage();
                    })
                    .catch((error) => {
                        alert("ERRORE : dati non validi");
                    });
            } else {
                alert("Inserisci dati validi");
            }
        },
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;

            this.store.selectedDishes.forEach((dish) => {
                const quantity = dish.quantity || 1;

                totalPrice += parseFloat(dish.price) * quantity;
            });

            this.store.totalPrice = totalPrice;
            return totalPrice.toFixed(2);
        },
    },
    mounted() {
        this.getFromLocalStorage();
    },
};
</script>

<template>
    <main>
        <div class="myordercontainer leftpart">
            <div class="form-container">
                <form
                    v-if="success != true"
                    method="POST"
                    @submit.prevent="submitOrder()"
                >
                    <div class="mb-3">
                        <label for="name" class="form-label">
                            Nome <span class="mandatory">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            v-model="name"
                            name="name"
                            placeholder="Inserisci il tuo nome"
                            maxlength="128"
                            minlength="3"
                            required
                            class="max-letters form-control"
                        />
                        <!-- DA TENERE PER FAVORE :class="{ 'warning': name.length > 128 && name.length < 3, 'd-none': !(name.length > 128 && name.length < 3) }" -->
                        <div
                            v-if="
                                !!name && (name.length < 3 || name.length > 128)
                            "
                            class="warning"
                        >
                            <span>
                                Inserisci un minimo di 3 caratteri e un massimo
                                di 128 caratteri
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="lastname" class="form-label">
                            Cognome <span class="mandatory">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            v-model="lastName"
                            name="lastName"
                            placeholder="Inserisci il tuo cognome"
                            maxlength="128"
                            minlength="3"
                            required
                            class="max-letters form-control"
                        />
                        <div
                            v-if="
                                !!lastName &&
                                (lastName.length < 3 || lastName.length > 128)
                            "
                            class="warning"
                        >
                            <span>
                                Inserisci un minimo di 3 caratteri e un massimo
                                di 128 caratteri
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">
                            Indirizzo <span class="mandatory">*</span>
                        </label>
                        <input
                            type="text"
                            id="address"
                            v-model="address"
                            name="address"
                            placeholder="Inserisci il tuo indirizzo"
                            maxlength="128"
                            minlength="3"
                            required
                            class="max-letters form-control"
                        />
                        <div
                            v-if="
                                !!address &&
                                (address.length < 3 || address.length > 128)
                            "
                            class="warning"
                        >
                            <span>
                                Inserisci un minimo di 3 caratteri e un massimo
                                di 128 caratteri
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">
                            Inserisci il tuo numero di telefono
                            <span class="mandatory">*</span>
                        </label>
                        <input
                            type="number"
                            id="phone"
                            v-model="phone"
                            name="phone"
                            placeholder="Inserisci il tuo numero di telefono"
                            maxlength="20"
                            minlength="6"
                            required
                            class="phone_max_letters form-control"
                        />
                        <div
                            v-if="
                                !!phone &&
                                (phone.length < 6 || phone.length > 20)
                            "
                            class="warning"
                        >
                            <span>
                                Inserisci un minimo di 6 caratteri e un massimo
                                di 20 caratteri // Inserisci un numero di
                                telefono valido
                            </span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">
                            Indirizzo email <span class="mandatory">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            v-model="email"
                            name="email"
                            placeholder="Inserisci la tua eamil"
                            required
                            class="form-control"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" class="form-text">
                            <span class="nb">Non condivideremo la tua email con nessuno</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <div class="homebadge">
                            <button type="submit" class="my-order-button btn">
                                Esegui il checkout
                            </button>
                        </div>
                        <div class="myhomebadge">
                            <router-link :to="{ name: 'restaurant', params: { slug: restaurantslug } } " class="text-decoration-none">
                                <i class="fa-solid fa-utensils"></i>
                            </router-link>
                        </div>
                    </div>
                </form>
                <div v-else>
                    <div>Ordire inviato correttamente</div>
                </div>
            </div>
            <div class="rightpart">
                <div class="mycardorders">
                    <h5 class="mb-2 pb-3">
                        <strong>La tua ricevuta:</strong>
                    </h5>
                    <div class="container-dish-receipt">
                        <div
                            v-for="(singleDish, i) in store.selectedDishes"
                            class="dish mb-2 d-flex justify-content-between"
                        >
                            <div class="left">
                                {{ singleDish.name }}
                            </div>
                            <div v-if="singleDish.quantity" class="right">
                                x{{ singleDish.quantity }}
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-end pt-4">
                        <div v-if="this.store.selectedDishes.length > 0">
                            <strong>Totale:</strong> {{ totalPrice + "€" }}
                        </div>
                    </div>
                </div>
                <div class="cardbraintree">braintree</div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
.myordercontainer {
    max-width: 50%;
    margin: 0 auto;
    padding-bottom: 300px;
    display: flex;
    justify-content: space-between;
    margin-top: 100px;

    .form-container {
        padding: 32px;
        width: 50%;
        background-color: rgb(
            240,
            240,
            240
        );
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        -webkit-box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);
        -moz-box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);
        box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);

        .myhomebadge{
            padding: 5px 12px;
            background-color: #3498db;
            color: white;
            border-radius: 20px;
            i{
                color: white;
            }
        }


        input{
            width: 100%;
            padding: 8px 16px;
            border-radius: 20px;
            border: none;
            margin-bottom: 8px;
        }

        .mandatory {
            color: red;
        }

        .warning {
            color: red;
            width: 100%;
        }
        .my-order-button {
            border-radius: 30px;
            background-color: #3498db;
            color: white;
        }
        .my-order-button:hover {
            background-color: #1d5d88;
        }


    }

    .rightpart {

        width: 30%;
        .mycardorders {
            padding: 32px;
            height: calc(60% - 20px);
            margin-bottom: 20px;
            background-color: rgb(
                240,
                240,
                240
            );
            border-radius: 30px;
            -webkit-box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);
            -moz-box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);
            box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);

            .container-dish-receipt {
                height: 200px;
                overflow: auto;
            }

            h5 {
                color: rgb(71, 71, 71);
            }

            .dish {
                background-color: rgba(196, 196, 196, 0.333);
                border-radius: 45px;
                padding: 12px 24px;
                width: 100%;
                height: 60px;
                .left{
                    width: 80%;
                    font-size: 0.8rem;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    text-overflow: ellipsis;
                }
                .right{
                    width: 10%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        .cardbraintree {
            padding: 32px;
            width: 100%;
            height: 40%;
            background-color: rgb(
                240,
                240,
                240
            ); // (240,240,240) rgb(235, 204, 204);
            border-radius: 30px; //50%; //30px
            -webkit-box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);
            -moz-box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);
            box-shadow: 0px 22px 54px -11px rgba(0, 0, 0, 0.56);
        }
    }
}

@media only screen and (max-width: 992px) {
    .myordercontainer {
        flex-direction: column;
        .form-container {
            padding: 50px 50px;
        }
        .rightpart {
            margin-top: 30px;
            .mycardorders {
                padding: 30px 30px;
                text-align: center;
            }
        }
    }
}
</style>
