import { reactive } from "vue";
import RestaurantList from "./pages/RestaurantList.vue";

export const store = reactive({
    typologies: [],
    dishes: [],
    selectedTypology: [],
    InputHome: '',
    currentRestaurants: [],
    selectedDishes: [],
    /*
        Se l'utente prova ad aggiungere un piatto di un altro ristorante,
        fare il controllo sul ristorante dei piatti già presenti nell'array
    */
    totalPrice: 0,
    restaurantPreview: [],
});