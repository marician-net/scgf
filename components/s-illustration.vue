<template>
    <lottie-player
    :src="src"
    background="transparent"
    speed="1"
    loop
    hover
    :class="className"
    ></lottie-player>
</template>

<script>
export default {
    props:['src','className']
}
</script>