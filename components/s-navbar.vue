<template>
<header class="navbar absolute z-50 w-screen flex items-center px-10 lg:px-40">
    <nuxt-link to="/">
        <img class="w-16 lg:w-20" src="/logo.png" alt="Logo">
    </nuxt-link>
    <nav class="ml-auto hidden lg:flex   ">
        <nuxt-link class="px-6 py-2" to="/"><h6>Secret Box</h6></nuxt-link>
        <nuxt-link class="px-6 py-2" to="/"><h6>About</h6></nuxt-link>
        <nuxt-link class="px-6 py-2" to="/"><h6>Contributors</h6></nuxt-link>
        <nuxt-link class="px-6 py-2" to="/"><h6>Work with Us</h6></nuxt-link>
    </nav>
</header>
</template>

<style>
.navbar{
    height: 230px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #4E4B66;
}
</style>