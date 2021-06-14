<template>
  <div class="flex justify-center w-full flex-wrap pt-40 lg:pt-64">
    <img class="bg-2" src="/bg2.jpg" alt="Bg 1" style="z-index:-1" />
    <main class="w-full z-10 relative lg:mt-20">
      <div class="mx-auto text-center">
        <h1
          class="hero-title m-auto text-center px-5 lg:px-20 text-5xl lg:text-7xl"
        >
          <span class="text-gradient">Work With Us </span>
        </h1>
        <br />
        <p class="mx-auto text-center desc px-5 lg:px-20">
          Help us on our quest to make Secret Network Ecosystem even better.
        </p>
      </div>
     <div class="w-full lg:w-4/5 mx-auto glass-card-white bg-white mt-10">
        <div class="flex w-full flex-wrap p-10 lg:p-20">
          <h1 class="w-full my-5 mb-10 text-3xl lg:text-4xl text-black ">
            Contact Form
          </h1>
         <div class="w-full lg:w-1/2 flex flex-wrap items-between p-4">
            <div class="w-full flex flex-wrap items-start">
                <label class="w-full my-3" for="fullname">Full name</label>
                <input type="text" placeholder="Jhon Doe" class="p-4 rounded-2xl bg-gray-100 w-full">
            </div>
            <div class="w-full flex flex-wrap items-start">
                <label class="w-full my-3" for="email">Email</label>
                <input type="email" placeholder="janedoe@gmail.com" 
                class="p-4 rounded-2xl bg-gray-100 w-full">
            </div>
         </div>

          <div class="w-full lg:w-1/2 flex flex-wrap p-4">
            <label class="w-full my-3" for="message">Message</label>
            <textarea class="p-4 rounded-2xl bg-gray-100 mt-3 w-full" cols="30" rows="8"></textarea>
          </div>
          <div class="w-full p-4 cursor-pointer">
            <h1>Services</h1>
            <ul class="flex mt-10 flex-wrap">
              <li class="m-2 px-4 py-2 rounded-full border-pink-400 border text-pink-400 hover:bg-pink-200 hover:text-pink-600">React Frontend</li>
              <li class="m-2 px-4 py-2 rounded-full border-pink-400 border text-pink-400 hover:bg-pink-200 hover:text-pink-600">UX Research</li>
              <li class="m-2 px-4 py-2 rounded-full border-pink-400 border text-pink-400 hover:bg-pink-200 hover:text-pink-600">Content Creator</li>
              <li class="m-2 px-4 py-2 rounded-full border-pink-400 border text-pink-400 hover:bg-pink-200 hover:text-pink-600">Graphic Designer</li>
              <li class="m-2 px-4 py-2 rounded-full border-pink-400 border text-pink-400 hover:bg-pink-200 hover:text-pink-600">Other</li>
            </ul>
          </div>


          <button class="mx-auto bg-pink-400 text-white rounded-3xl px-20 py-3 mt-10">
            Send
          </button>

        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  scrollToTop: true
}
</script>
<style>
.bg-2 {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(180deg);
}

.glass-card-white {
  border-radius: 75px 0px 75px 75px;
}
.text-gradient {
  background: linear-gradient(91.22deg, #A568EF 16%, #FF9191 103.7%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>