<script>
    export default {
        data() {
            return { 
            deliveboofooter:[
            {
              link:'Investitori',
            },
            {
              link:'Chi siamo',
            },
            {
              link:'Ristoranti',
            },
            {
              link:'Altro',
            },
            {
              link:'Pressroom',
            },
            {
              link:'Programmazione',
            },
            {
              link:'Design',
            },
            {
              link:'Lavora con noi',
            },
            {
              link:'Diventa nostro partner',
            },
            ],
            note: [
            {
            link:'Termini & Condizioni',
            },
            {
            link:'Informativa sulla privacy',
            },
            {
            link:'Cookies',
            },
            {
            link:'Classificazione dei partner',
            },
            {
            link:'Classificazione dei partner',
            },
            ],
            aiuto:[
            {
              link:'Contatti',
            },
            {
              link:'FAQ',
            },
            {
              link:'Tipi di cucina',
            },
            ],
            icons:[
            {
              img:"./src/assets/img/footer-facebook.png",
            },
            {
              img:"./src/assets/img/footer-periscope.png",
            },
            {
              img:"./src/assets/img/footer-pinterest.png",
            },
            {
              img:"./src/assets/img/footer-twitter.png",
            },
            {
              img:"./src/assets/img/footer-twitter.png",
            },
          ],
        };
    },  
}
</script>

<template>
    <footer>
        <div class="bg_footer">
            <div class="mycontainer">
                <div class="top_footer">
                    <div class="column p-3"> 
                        <ul>
                            <li><h4>DELIVEBOO</h4></li>
                            <li v-for="(link, index) in deliveboofooter">
                                <a href="">{{ deliveboofooter[index].link }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="column p-3"> 
                        <ul>
                            <li><h4>NOTE LEGALI</h4></li>
                            <li v-for="(link, index) in note">
                                <a href="">{{ note[index].link }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="column p-3">
                        <ul>
                            <li><h4>AIUTO</h4></li>
                            <li v-for="(link, index) in aiuto">
                                <a href="">{{ aiuto[index].link }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="column p-3">
                        <h4 class="mb-3">PORTA DEVIVEBOO CON TE</h4>
                        <div class="mobile p-2 mb-3">
                            <div class="p-2">
                                <i class="fa-brands fa-apple"></i>
                            </div>
                            <div>
                                <p>scarica su APPLE STORE</p>
                            </div> 
                        </div>
                        <div class="mobile p-2">
                            <div class="p-2">
                                <i class="fa-brands fa-android"></i>
                            </div>
                            <div>
                                <p>scarica su ANDROID</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>


    .mycontainer{
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            padding: 40px;
        }

    .bg_footer{
        background-color: #3498DB;
        color: white;

        .top_footer{
            display: flex;
        }

        ul{
            padding: 0;
            li{
            list-style: none;
            
                > a {
                    text-decoration: none;
                    color: white;
                }
            }
        }

        .column{
            background-color: #2a7cb3;
            margin: 10px;
            padding: 10px;
            height: 300px;
            width: 250px;
        }

        .mobile{
            height: 70px;
            width: 160px;
            border-radius: 20px;
            background-color: lightgray;
            display: flex;
            box-shadow: 10px 10px 5px rgba(47, 47, 47, 0.117);
            i{
                font-size: 30px;
            }
        }
}

</style>
