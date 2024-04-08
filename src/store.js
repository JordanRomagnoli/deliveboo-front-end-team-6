import { reactive } from "vue";

export const store = reactive({
    typologies: [],
    selectedTypology: [],
    InputHome: '',
    currentRestaurants: [],
    currentSingleRestaurant: null
});