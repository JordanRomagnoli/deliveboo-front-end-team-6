<script>
export default {
    data() {
        return {
            deliveboofooter: [
                {
                    link: "Investitori",
                },
                {
                    link: "Chi siamo",
                },
                {
                    link: "Ristoranti",
                },
                {
                    link: "Altro",
                },
                {
                    link: "Pressroom",
                },
                {
                    link: "Programmazione",
                },
                {
                    link: "Design",
                },
                {
                    link: "Lavora con noi",
                },
                {
                    link: "Diventa nostro partner",
                },
            ],
            note: [
                {
                    link: "Termini & Condizioni",
                },
                {
                    link: "Informativa sulla privacy",
                },
                {
                    link: "Cookies",
                },
                {
                    link: "Classificazione dei partner",
                },
                {
                    link: "Classificazione dei partner",
                },
            ],
            aiuto: [
                {
                    link: "Contatti",
                },
                {
                    link: "FAQ",
                },
                {
                    link: "Tipi di cucina",
                },
            ],
            icons: [
                {
                    img: "./src/assets/img/footer-facebook.png",
                },
                {
                    img: "./src/assets/img/footer-periscope.png",
                },
                {
                    img: "./src/assets/img/footer-pinterest.png",
                },
                {
                    img: "./src/assets/img/footer-twitter.png",
                },
                {
                    img: "./src/assets/img/footer-twitter.png",
                },
            ],
        };
    },
};
</script>

<template>
    <footer>
        <div class="bg_footer">
            <div class="mycontainer">
                <div class="top_footer">
                    <div class="row">
                        <div class="col p-3">
                            <ul>
                                <li><h4>Deliveboo</h4></li>
                                <li v-for="(link, index) in deliveboofooter">
                                    <a href="">{{
                                        deliveboofooter[index].link
                                    }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col p-3">
                            <ul>
                                <li><h4>Note Legali</h4></li>
                                <li v-for="(link, index) in note">
                                    <a href="">{{ note[index].link }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col p-3">
                            <ul>
                                <li><h4>Aiuto</h4></li>
                                <li v-for="(link, index) in aiuto">
                                    <a href="">{{ aiuto[index].link }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col p-3">
                            <h4 class="mb-3">Porta Deliveboo con te</h4>
                            <div class="mobile p-2 mb-3">
                                <div class="button-container">
                                    <i class="fa-brands fa-apple icon"></i>
                                    <a href="#" class="button"
                                        >Scarica su APPLE STORE</a
                                    >
                                </div>
                            </div>
                            <div class="mobile p-2">
                                <div class="button-container">
                                    <i class="fa-brands fa-android icon"></i>
                                    <a href="#" class="button"
                                        >Scarica su ANDROID</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.bg_footer {
    background-color: #292c2d;
    color: white;
    .mycontainer {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 40px;
        .top_footer {
            display: flex;
            justify-content: center;
            ul {
                li {
                    list-style: none;
                    > a {
                        text-decoration: none;
                        font-size: 0.9rem;
                        font-weight: 300;
                        color: white;
                        &:hover{
                            color: #6AAED7;
                        }
                    }
                }
            }
        }
        .mobile {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: black;
            border-radius: 20px;
            &:hover {
                background-color: #0056b3;
            }
            .button-container {
                display: flex;
                align-items: center;
                padding: 5px 10px;
                .icon {
                    font-size: 30px;
                    margin-right: 10px; 
                }
                .button {
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    text-align: center;
                    text-decoration: none;
                    font-size: 16px;
                    transition: background-color 0.3s ease; 
                }
            }
        }
    }
}
</style>
