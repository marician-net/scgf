<template>
  <header
    class="navbar h-40 lg:h-80 absolute z-50 w-screen flex items-center px-10 lg:px-40"
  >
    <nuxt-link to="/">
      <img class="w-16 lg:w-20" src="/logo.png" alt="Logo" />
    </nuxt-link>
    <nav  :class="(!menuActive) ? 'ml-auto hidden lg:flex' : 'flex z-50 fixed flex-wrap items-start nav-mobile'"
    >
      <a href="#" @click="to('/secret-boxes')"  class="px-6 py-4 lg:py-2 hover-gradient w-full lg:w-auto"
        ><h6>Secret Boxes</h6></a>
      <a href="#"  @click="scrollToMenu('about')" class="px-6 py-4 lg:py-2 hover-gradient w-full lg:w-auto" 
        ><h6>About</h6></a
      >
      <a href="#" @click="scrollToMenu('contributors')" class="px-6 py-4 lg:py-2 hover-gradient w-full lg:w-auto" 
        ><h6>Contributors</h6></a
      >
      <a href="#" @click="to('/work-with-us')" class="px-6 py-4 lg:py-2 hover-gradient w-full lg:w-auto" 
        ><h6>Work with Us</h6></a
      >
    </nav>
    <img v-if="menuActive" @click="menuActive = false" class="z-20 fixed top-0 right-0" width="360px"  src="/menu-bg.jpg" alt="Menu Bg">
    <button class="ml-auto lg:hidden" @click="menuActive = !menuActive">
      <svg
        v-if="!menuActive"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16H28"
          stroke="#111111"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 8H28"
          stroke="#111111"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 24H28"
          stroke="#111111"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 8L8 24"
          stroke="#111111"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 8L24 24"
          stroke="#111111"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods:{
    to(link){
      this.menuActive = false
      this.$router.push(link)
    },
    scrollToMenu(link){
      this.menuActive = false
      if(this.$route.path == "/"){
        this.$store.commit("scrollToMenu",link)
      }else{
        this.$router.push("/?"+link)
      }
    }
  }
};
</script>
<style>
.nav-mobile{
    width: 360px;
    margin-top:150px;
    right: 0;
    top: 0;
    padding: 10px;
}
.navbar {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #4e4b66;
}
.hover-gradient:hover {
  background: linear-gradient(180deg, #a769ec 0%, #f28b9d 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>