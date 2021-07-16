<template>
  <lottie-player
    :src="src"
    background="transparent"
    speed="1"
    loop
    :hover="hover"
    :autoplay="autoplay"
    :class="className"
  ></lottie-player>
</template>

<script>
export default {
  props: ["src", "className"],
  data() {
    return {
      hover: true,
      autoplay: false
    };
  },
  mounted() {
    var screen = window.matchMedia("(max-width: 768px)");
    if (screen.matches) {
      this.hover = false;
      this.autoplay = true;
    }
  }
};
</script>
