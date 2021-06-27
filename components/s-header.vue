<template>
    <header>
        <Logo class="logo" />
        <div class="btn btn-menu" @click="openMenu = true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16H28" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 8H28" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 24H28" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <ul v-if="$route.path == '/' || $route.path == '/index2'" 
        :class="(openMenu) ? 'mobile-menu' : '' "
        @click="openMenu = false"
        >
            <li class="mobile-only">
                <img src="/bg-mobile-menu.png" class="mobile-only bg-mobile-menu">

        <div class="bg-il1-nav-menu-mobile">
            Baa
        </div>
        <div class="bg-il2-nav-menu-mobile">
        </div>
                <img class="logo-menu" src="/logo-full.png" alt="Logo">
                <svg class="close-btn" @click="openMenu = false" width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8L8 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 8L24 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </li>
            <li class="mt-md-50" v-scroll-to="{
                    el: '#secret-boxes',
                    container: 'body',
                    duration: 500,
                    lazy: false,
                    easing: 'linear',
                    offset: -200,
                    force: true,
                    cancelable: true,
                    x: false,
                    y: true
                }">
                <h6 class="body-1">
                    <svg class="mobile-only" width="32" height="3" viewBox="0 0 32 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="3" fill="#803DFF"/>
                    </svg>
                    <br class="mobile-only">
                    Secret Boxes</h6>
            </li>
            <li v-scroll-to="{
                    el: '#about',
                    container: 'body',
                    duration: 500,
                    lazy: false,
                    easing: 'linear',
                    offset: -200,
                    force: true,
                    cancelable: true,
                    x: false,
                    y: true
                }">
                <h6  class="body-1">About</h6>
            </li>
            <li v-scroll-to="{
                    el: '#contributors',
                    container: 'body',
                    duration: 500,
                    lazy: false,
                    easing: 'linear',
                    offset: -200,
                    force: true,
                    cancelable: true,
                    x: false,
                    y: true
                }">
                <h6 class="body-1">Contributors</h6>
            </li>
            <li  v-scroll-to="{
                    el: '#work-with-us',
                    container: 'body',
                    duration: 500,
                    lazy: false,
                    easing: 'linear',
                    offset: -200,
                    force: true,
                    cancelable: true,
                    x: false,
                    y: true
                }">
                <h6 class="body-1">Work with us</h6>
            </li>
        </ul>

         <ul v-else :class="(openMenu) ? 'mobile-menu' : '' "
        @click="openMenu = false"
         
         >
            <li class="mobile-only">
                <img src="/bg-mobile-menu.png" class="mobile-only bg-mobile-menu">


        <div class="bg-il1-nav-menu-mobile">
        </div>
        <div class="bg-il2-nav-menu-mobile">
        </div>
                <img class="logo-menu" src="/logo-full.png" alt="Logo">
                <svg class="close-btn" @click="openMenu = false" width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8L8 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 8L24 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li class="mt-md-50" @click="scrollToMenu('secret-boxes')">
                <h6 class="body-1">
                    <svg class="mobile-only" width="32" height="3" viewBox="0 0 32 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="3" fill="#803DFF"/>
                    </svg>
                    <br class="mobile-only">
                    Secret Boxes</h6>
            </li>
            <li @click="scrollToMenu('#about')">
                <h6  class="body-1">About</h6>
            </li>
            <li @click="scrollToMenu('#contributor')">
                <h6 class="body-1">Contributors</h6>
            </li>
            <li @click="scrollToMenu('work-with-us')">
                <h6 class="body-1">Work with us</h6>
            </li>
        </ul>



        <nav v-if="openMenu" class="mobile-only footer-nav-menu">
            <svg class="icon-footer-nav-menu" width="32" height="3" viewBox="0 0 32 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="3" fill="#803DFF"/>
            </svg>
            <div class="list-sosmed-footer-nav-menu">
                <a href="#">Telegram</a>
                <a href="#">Twitter</a>
                <a href="#">Discord</a>
                <a href="#">Medium</a>
            </div>
            <div class="cr-footer-nav-menu">
                © 2021 SecretChainGirl Foundation
            </div>
            </nav>
    </header>
</template>

<style lang="scss">
header{
    height: 140px;
    width: 100%;
    padding: 0 11%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    @media only screen and (max-width:768px){
        height: 120px;
        padding: 0%;
    }
    ul{
        margin-left: auto;
        list-style: none;
        display: flex;
        cursor: pointer;
        @media only screen and (max-width:768px){
            display: none;
            .mt-md-50{
                margin-top: 50px;
            }
        }
    }
    ul li{
        padding: 25px;
        @media only screen and (max-width:768px){
         padding: 0 25px;
        }
    }
    ul li h6:hover{
        background: linear-gradient(180deg, #A769EC 0%, #F28B9D 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .logo{
        width: 52px;
        @media only screen and (max-width:768px){
            margin-left:19px;
            width: 48px;
        }
    }

    .btn-menu{
        display: none;
        margin-left: auto;
        margin-right: 35px;
        @media only screen and (max-width:768px){
            display: inline-block
        }
    }
}
.mobile-only{
    display: none;
}
@media only screen and (max-width:768px){
    .mobile-only{
        display: block;
    }
    .mobile-menu{
        display: block;
        flex-wrap: wrap;
        position: fixed;
        background:#fff;
        left:0;
        top:0;
        width:100%;
        height: 100vh;
        z-index: 1002;
        padding:0;
        li{
            padding: 25px 45px;
            font-size: 20px;
        }
        .mt-md-50{
            margin-top: 75px;
        }
        .bg-mobile-menu{
            position: absolute;
            z-index: -1;
            top:-50px;
            right:-260px
        }
        .close-btn{
            top:30px;
            right:15px;
            position: absolute;
        }
        .logo-menu{
            left:15px;
            position: absolute;
        }
    }
    .footer-nav-menu{
        position: fixed;
        bottom: 0;
        left:0;
        z-index: 10000;
        width: 100%;
        .icon-footer-nav-menu{
            margin-left: 40px;
        }
        .list-sosmed-footer-nav-menu{
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 24px 40px;
            a{
                width: 25%;
                text-align: center;
                font-family: 'Segoe UI';
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0.5px;
                color: #4E4B66;
            }
        }
        .cr-footer-nav-menu{
            width: 100%;
            text-align: center;
            padding-bottom: 30px;
            padding-top: 30px;
        }
    }


    .bg-il1-nav-menu-mobile{
            position: absolute;
            width: 172px;
            height: 172px;
            right: -20px;
            top: -54px;
            // background: red;
            background: linear-gradient(0deg, #FF9191, #FF9191), #FF9191;
            opacity: 0.6;
            filter: blur(148.596px);

        }
        .bg-il2-nav-menu-mobile{
            position: absolute;
            width: 146px;
            height: 146px;
            left: -48px;
            top: 556px;
            background: linear-gradient(180deg, #E9EEF3 0%, #99CCFF 0.01%, #B29AFF 50.31%, #FCA9FF 100%), #FF9191;
            filter: blur(167.335px);
        }
}


</style>

<script>
export default {
    data(){
        return {
            openMenu: false
        }
    },
    methods:{
         scrollToMenu(link){
            this.openMenu = false
            this.$router.push("/"+link)
        }
    }
}
</script>