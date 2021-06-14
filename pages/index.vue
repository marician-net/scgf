<template>
  <div class="flex justify-center w-full flex-wrap pt-40 lg:pt-64 mb-80">
    <img class="bg-1 " src="/bg1.jpg" alt="Bg 1" style="z-index:-1" />

    <main class="w-full z-10 relative">
      <div class="mx-auto text-center">
        <h1
          class="hero-title m-auto text-center px-5 lg:px-20 text-5xl lg:text-7xl"
        >
          <span class="text-gradient">SecretChainGirl </span>
            <br />
          <span class="text-gradient">Foundation </span>
        </h1>
        <br />
        <p class="mx-auto text-center desc px-5 lg:px-20 text-2xl">
          We’re passionate about helping developers build <br> privacy-centric DApps
        </p>
        <br />
        <nuxt-link to="/explore-more" class="text-primary flex justify-center mx-auto mt-16 lg:mt-0">
          Explore more
          <svg
            class="ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.59426 10.8107C3.20414 10.8603 2.90205 11.1983 2.90205 11.6076C2.90205 12.051 3.25657 12.4109 3.69351 12.4109L17.6059 12.4109L12.5797 17.4904L12.5086 17.5724C12.2717 17.8865 12.2952 18.338 12.5776 18.6267C12.8858 18.9404 13.3871 18.9415 13.6962 18.6288L20.0805 12.1763L20.1509 12.0955C20.258 11.9542 20.3137 11.7816 20.3137 11.6076C20.3137 11.5037 20.2937 11.3998 20.2536 11.3014C20.1312 11.0004 19.8431 10.8045 19.5223 10.8045L3.69351 10.8045L3.59426 10.8107ZM12.5775 4.58897C12.2694 4.90383 12.2694 5.41254 12.5796 5.72528L16.101 9.28403L16.1823 9.3559C16.4933 9.59541 16.9372 9.57045 17.2196 9.2819C17.3737 9.12442 17.4507 8.91993 17.4507 8.71534C17.4507 8.50863 17.3737 8.30298 17.2175 8.1456L13.6972 4.58684L13.6159 4.51517C13.3047 4.27643 12.86 4.30129 12.5775 4.58897Z"
              fill="#6900F4"
            />
          </svg>
        </nuxt-link>

        <s-card-line1 class="card-line-1" />
        <s-card-line2 class="card-line-2" />
        <s-card-line3 class="card-line-3" />

        <img class="crystal" src="/il/_crystal.png" alt="Crystal" />
        <img class="crystal-1" src="/il/_crystal-1.png" alt="Crystal" />
        <img class="crystal-2" src="/il/_crystal-2.png" alt="Crystal" />
        <img class="crystal-3" src="/il/_crystal-3.png" alt="Crystal" />
      </div>
      

      <div class="w-full lg:w-4/5 mx-auto mt-64 lg:mt-80 glass-card py-10 secret-box">
        <div class="flex w-full flex-wrap">
          <h1 class="text-3xl lg:text-5xl text-black p-10">
            <div class="-mt-16 mb-5">
              <svg
                width="32"
                height="3"
                viewBox="0 0 32 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="3" fill="#803DFF" />
              </svg>
            </div>
            Secret Boxes
          </h1>
          <div class="w-full lg:w-2/3 p-10 pt-0">
            <p class="text-2xl">
              Secret Boxes are quickstarts to help you build decentralized,
              privacy preserving dApps on the Secret Network.
            </p>
            <nuxt-link to="secret-boxes" class="text-primary flex mt-3">
              Explore more
              <svg
                class="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.59426 10.8107C3.20414 10.8603 2.90205 11.1983 2.90205 11.6076C2.90205 12.051 3.25657 12.4109 3.69351 12.4109L17.6059 12.4109L12.5797 17.4904L12.5086 17.5724C12.2717 17.8865 12.2952 18.338 12.5776 18.6267C12.8858 18.9404 13.3871 18.9415 13.6962 18.6288L20.0805 12.1763L20.1509 12.0955C20.258 11.9542 20.3137 11.7816 20.3137 11.6076C20.3137 11.5037 20.2937 11.3998 20.2536 11.3014C20.1312 11.0004 19.8431 10.8045 19.5223 10.8045L3.69351 10.8045L3.59426 10.8107ZM12.5775 4.58897C12.2694 4.90383 12.2694 5.41254 12.5796 5.72528L16.101 9.28403L16.1823 9.3559C16.4933 9.59541 16.9372 9.57045 17.2196 9.2819C17.3737 9.12442 17.4507 8.91993 17.4507 8.71534C17.4507 8.50863 17.3737 8.30298 17.2175 8.1456L13.6972 4.58684L13.6159 4.51517C13.3047 4.27643 12.86 4.30129 12.5775 4.58897Z"
                  fill="#6900F4"
                />
              </svg>
            </nuxt-link>
          </div>
          <div class="w-full flex flex-wrap mt-10 justify-center">
            <div class="w-1/2 lg:w-1/3 p-4 flex flex-wrap justify-center">
              <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_sqamzndl.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                class="w-5/6"
              ></lottie-player>
              <strong class="w-full text-center font-normal text-xl">Secret Counter</strong>
            </div>
            <div class="w-1/2 lg:w-1/3 p-4 flex flex-wrap justify-center">
              <lottie-player
                src="https://assets2.lottiefiles.com/private_files/lf30_0vbtxqrd.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                class="w-5/6"
              ></lottie-player>
              <strong class="w-full text-center font-normal text-xl">Figmen Learn</strong>
            </div>
            <div class="w-1/2 lg:w-1/3 p-4 flex flex-wrap justify-center">
              <lottie-player
                src="https://assets10.lottiefiles.com/private_files/lf30_woabmjiz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                class="w-5/6"
              ></lottie-player>
              <strong class="w-full text-center font-normal text-xl">Richie Rich</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-4/5 mx-auto mt-10 lg:mt-40 about">
        <div class="flex w-full flex-wrap">
          <h1 class="text-3xl lg:text-5xl text-black p-10 pt-0">
            <div class="-mt-5 mb-5 flex items-center">
              <svg
                width="32"
                height="3"
                viewBox="0 0 32 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="3" fill="#803DFF" />
              </svg>
              <span class="text-sm pl-2 text-gradient">About Us</span>
            </div>
            Mission
          </h1>
          <div class="w-full lg:w-2/3 p-10 pt-0">
            <p class="text-2xl">
              Developer adoption of the Secret Network by creating Secret Boxes
              for key use cases. Passionate about helping developers create
              beautifully designed Secret Apps.
            </p>
          </div>
          <img
            class=" w-full lg:w-3/4 lg:-ml-20 "
            src="/il/rocket-mission.png"
            alt="Rocket Mission"
          />
        </div>
      </div>

      <div class="w-full lg:w-4/5 mx-auto mt-10 lg:mt-40 lg:px-10 contributors">
        <s-contributors  />
      </div>

      <div class="w-full lg:w-4/5 mx-auto p-2 mt-10 lg:mt-40 lg:px-10 work-with-us">
        <div class="flex w-full flex-wrap items-start">
          <h1 class="w-full text-3xl lg:text-5xl text-black p-10">
            <div class="-mt-5 mb-5">
              <svg
                width="32"
                height="3"
                viewBox="0 0 32 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="3" fill="#803DFF" />
              </svg>
            </div>
            Work with Us
          </h1>
          <div class="w-full lg:w-3/5 p-10 pt-0">
            <p class="text-2xl w-5/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              pulvinar suspendisse nunc a. Dictumst blandit amet nunc feugiat
              gravida. Sagittis, in iaculis vestibulum, rhoncus scelerisque
              scelerisque dignissim odio. Amet nisl, tristique sed pharetra
              molestie donec elit rutrum quisque. Eget augue non mauris est. Eu
              sed et est lorem enim morbi. Viverra aliquet cursus habitant dolor
              purus. Dolor augue eu sit in.
            </p>
            <nuxt-link to="/work-with-us" class="text-primary flex mt-3">
              Let's go
              <svg
               class="ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.59426 10.8107C3.20414 10.8603 2.90205 11.1983 2.90205 11.6076C2.90205 12.051 3.25657 12.4109 3.69351 12.4109L17.6059 12.4109L12.5797 17.4904L12.5086 17.5724C12.2717 17.8865 12.2952 18.338 12.5776 18.6267C12.8858 18.9404 13.3871 18.9415 13.6962 18.6288L20.0805 12.1763L20.1509 12.0955C20.258 11.9542 20.3137 11.7816 20.3137 11.6076C20.3137 11.5037 20.2937 11.3998 20.2536 11.3014C20.1312 11.0004 19.8431 10.8045 19.5223 10.8045L3.69351 10.8045L3.59426 10.8107ZM12.5775 4.58897C12.2694 4.90383 12.2694 5.41254 12.5796 5.72528L16.101 9.28403L16.1823 9.3559C16.4933 9.59541 16.9372 9.57045 17.2196 9.2819C17.3737 9.12442 17.4507 8.91993 17.4507 8.71534C17.4507 8.50863 17.3737 8.30298 17.2175 8.1456L13.6972 4.58684L13.6159 4.51517C13.3047 4.27643 12.86 4.30129 12.5775 4.58897Z"
                  fill="#6900F4"
                />
              </svg>
            </nuxt-link>
          </div>
          <img
            class="w-full lg:w-2/5"
            src="/il/work-with-us.png"
            alt="Rocket Mission"
          />
        </div>
      </div>
    </main>
    <div class="bg-gradient-1"></div>
    <div class="bg-gradient-2"></div>
    <div class="bg-gradient-3"></div>
    <div class="bg-gradient-4"></div>
  </div>
</template>

<script>
export default {
  computed: {
    scrollToMenu () {
      return this.$store.state.scrollToMenu
    }
  },
  watch: {
    scrollToMenu (element) {
      const el = this.$el.getElementsByClassName(element)[0];
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  },
  mounted(){
    var link = window.location.href
    if(link.split("?")[1] !== undefined){
        // console.log(link.split("?")[1])
      this.$store.commit("scrollToMenu",(link.split("?")[1]).split("#")[0])
    }
  }
};
</script>
<style>
.bg-gradient-1 {
  position: absolute;
  width: 593px;
  height: 593px;
  left: 1271px;
  top: 1079px;
  background: linear-gradient(
      180deg,
      #e9eef3 0%,
      #99ccff 0.01%,
      #b29aff 50.31%,
      #fca9ff 100%
    ),
    #ff9191;
  filter: blur(400px);
  opacity: 0.6;
}
.bg-gradient-2 {
  position: absolute;
  width: 593px;
  height: 593px;
  left: -410px;
  top: 1695px;
  background: linear-gradient(
      180deg,
      #e9eef3 0%,
      #99ccff 0.01%,
      #b29aff 50.31%,
      #fca9ff 100%
    ),
    #ff9191;
  filter: blur(400px);
  opacity: 0.6;
}
.bg-gradient-3 {
  position: absolute;
  width: 463px;
  height: 463px;
  left: 1283px;
  top: 2968px;
  background: linear-gradient(0deg, #ff9191, #ff9191), #ff9191;
  opacity: 0.6;
  filter: blur(400px);
}
.bg-gradient-4 {
  position: absolute;
  width: 593px;
  height: 593px;
  left: -416px;
  top: 3548px;
  background: linear-gradient(
      180deg,
      #e9eef3 0%,
      #99ccff 0.01%,
      #b29aff 50.31%,
      #fca9ff 100%
    ),
    #ff9191;
  filter: blur(400px);
  opacity: 0.6;
}
.bg-1 {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.hero-title,
.text-gradient {
  background: linear-gradient(91.22deg, #a568ef 16%, #ff9191 103.7%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.desc {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: normal;
  line-height: 32px;
  letter-spacing: 0.25px;
  color: #4e4b66;
}
.card-line-1 {
  position: absolute;
  top: 180px;
  left: 15%;
  width: 20%;
}

.card-line-2 {
  position: absolute;
  top: 230px;
  right: 15%;
  width: 20%;
}

.card-line-3 {
  position: absolute;
  top: 330px;
  left: 20%;
  width: 20%;
}
.crystal {
  position: absolute;
  top: 80px;
  right: 15%;
  width: 10%;
}
.crystal-1 {
  position: absolute;
  top: 480px;
  left: 15%;
  width: 5%;
}
.crystal-2 {
  position: absolute;
  top: 330px;
  right: 15%;
  width: 10%;
}
.crystal-3 {
  position: absolute;
  top: 150px;
  left: 13%;
  width: 8%;
}

@media only screen and (max-width: 800px) {
  .bg-gradient-1 {
    width: 200px;
    height: 200px;
    left: 500px;
  }
  .bg-gradient-2 {
    position: absolute;
    width: 200px;
    height: 200px;
    left: -100px;
  }
  .bg-gradient-3 {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 500px;
  }
  .bg-gradient-4 {
    width: 200px;
    height: 200px;
    left: -100px;
  }
  .card-line-1 {
    top: 170px;
    width: 30%;
    left: 8%;
  }
  .card-line-2 {
    top: 250px;
    right: 8%;
    width: 30%;
  }
  .card-line-3 {
    top: 300px;
    width: 30%;
    left: 12%;
  }
  .crystal {
    top: 250px;
  }
  .crystal-1 {
    top: 450px;
  }
  .crystal-2 {
    top: 450px;
  }
  .crystal-3 {
    top: 250px;
  }
}

.glass-card {
  background: linear-gradient(
    104.93deg,
    #ffffff 3.26%,
    rgba(255, 255, 255, 0) 92.12%
  );
  backdrop-filter: blur(28px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 75px 0px 75px 75px;
}

.c-hover {
  display: none;
}
.c-hover-flex {
  display: none;
}
.c-to-hover:hover .c-hover {
  display: block;
}

.c-to-hover:hover .c-hover-flex {
  display: flex;
}
</style>
