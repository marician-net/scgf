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
        :class="(openMenu) ? 'mobile-menu' : '' ">
            <li class="mobile-only">
                <img src="/bg-mobile-menu.png" class="mobile-only bg-mobile-menu">

                <img class="logo-menu" src="/logo-full.png" alt="Logo">
                <svg class="close-btn" @click="openMenu = false" width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8L8 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 8L24 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </li>
            <li v-scroll-to="{
                    el: '#secret-boxes',
                    container: 'body',
                    duration: 500,
                    lazy: false,
                    easing: 'linear',
                    offset: -200,
                    force: true,
                    cancelable: true,
                    onStart: onStart,
                    onDone: onDone,
                    onCancel: onCancel,
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
                    onStart: onStart,
                    onDone: onDone,
                    onCancel: onCancel,
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
                    onStart: onStart,
                    onDone: onDone,
                    onCancel: onCancel,
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
                    onStart: onStart,
                    onDone: onDone,
                    onCancel: onCancel,
                    x: false,
                    y: true
                }">
                <h6 class="body-1">Work with us</h6>
            </li>
        </ul>

         <ul v-else :class="(openMenu) ? 'mobile-menu' : '' ">
            <li class="mobile-only">
                <img src="/bg-mobile-menu.png" class="mobile-only bg-mobile-menu">

                <img class="logo-menu" src="/logo-full.png" alt="Logo">
                <svg class="close-btn" @click="openMenu = false" width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8L8 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 8L24 24" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </li>
            <li @click="scrollToMenu('secret-boxes')">
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
    </header>
</template>

<style lang="scss">
header{
    height: 229px;
    width: 100%;
    padding: 0 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    @media only screen and (max-width:1080px){
            height: 120px;
    padding: 0%;
    }
    ul{
        margin-left: auto;
        list-style: none;
        display: flex;
        cursor: pointer;
        @media only screen and (max-width:1080px){
            display: none
        }
    }
    ul li{
        padding: 52px;
    }
    ul li h6:hover{
        background: linear-gradient(180deg, #A769EC 0%, #F28B9D 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .logo{
        width: 52px;
        @media only screen and (max-width:1080px){
            margin-left:19px;
            width: 48px;
        }
    }

    .btn-menu{
        display: none;
        margin-left: auto;
        margin-right: 35px;
        @media only screen and (max-width:1080px){
            display: inline-block
        }
    }
}
.mobile-only{
    display: none;
}
@media only screen and (max-width:1080px){
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
        z-index: 1002;
        padding:0;
        padding-bottom: 200px;
        ul li{
            padding: 0;
            font-size: 20px;
        }
        .bg-mobile-menu{
            top:200px;
            position: absolute;
            z-index: -1;
        }
        .close-btn{
            right:15px;
            position: absolute;
        }
        .logo-menu{
            left:15px;
            position: absolute;
        }
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