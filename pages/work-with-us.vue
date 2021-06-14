<template>
  <div class="flex justify-center w-full flex-wrap pt-40 lg:pt-48">
    <img class="bg-2" src="/bg2.jpg" alt="Bg 1" style="z-index: -1" />
    <main class="w-full z-10 relative lg:mb-20">
      <div class="mx-auto text-center">
        <h1
          class="
            hero-title
            m-auto
            text-center
            px-5
            lg:px-20
            text-5xl
            lg:text-7xl
          "
        >
          <span class="text-gradient">Work With Us </span>
        </h1>
        <br />
        <p class="text-2xl mx-auto text-center desc px-5 lg:px-20">
          Help us on our quest to make Secret Network Ecosystem even better.
        </p>
      </div>
      <div class="w-full lg:w-11/12 mx-auto glass-card-white bg-white mt-10">
        <div class="flex w-full flex-wrap p-10 lg:p-20">
          <h1 class="w-full my-5 mb-10 text-3xl lg:text-4xl text-black">
            Contact Form
          </h1>
          <div class="w-full lg:w-2/5 flex flex-wrap items-between p-4">
            <div class="w-full flex flex-wrap items-start relative">
              <svg
                class="absolute left-5 bottom-5 lg:bottom-9"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"
                />
                <circle
                  cx="12.0001"
                  cy="7.76476"
                  r="2.52941"
                  stroke="url(#paint1_linear)"
                  stroke-width="2"
                />
                <path
                  d="M18.3529 19.7648C18.3529 17.8926 17.6835 16.0972 16.4921 14.7734C15.3007 13.4496 13.6848 12.7059 11.9999 12.7059C10.315 12.7059 8.69911 13.4496 7.50771 14.7734C6.3163 16.0972 5.64697 17.8926 5.64697 19.7648"
                  stroke="url(#paint2_linear)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A769EC" />
                    <stop offset="1" stop-color="#F28B9D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="12.0001"
                    y1="4.23535"
                    x2="12.0001"
                    y2="11.2942"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A769EC" />
                    <stop offset="1" stop-color="#F28B9D" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="11.9999"
                    y1="12.7059"
                    x2="11.9999"
                    y2="19.7648"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A769EC" />
                    <stop offset="1" stop-color="#F28B9D" />
                  </linearGradient>
                </defs>
              </svg>
              <label class="w-full my-3" for="fullname">Full name</label>
              <input
                v-model="fullname"
                type="text"
                placeholder="Jhon Doe"
                class="p-4 pl-16 rounded-2xl bg-gray-100 w-full"
              />
            </div>
            <div class="w-full flex flex-wrap items-start relative">
              <svg
                class="absolute left-5  bottom-5 lg:bottom-9"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="url(#paint1_linear)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="12"
                    y1="4"
                    x2="12"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A769EC" />
                    <stop offset="1" stop-color="#F28B9D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="12"
                    y1="6"
                    x2="12"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A769EC" />
                    <stop offset="1" stop-color="#F28B9D" />
                  </linearGradient>
                </defs>
              </svg>

              <label class="w-full my-3" for="email">Email</label>
              <input
                v-model="email"
                type="email"
                placeholder="janedoe@gmail.com"
                class="p-4 pl-16 rounded-2xl bg-gray-100 w-full"
              />
            </div>
          </div>

          <div class="w-full lg:w-3/5 flex flex-wrap p-4">
            <label class="w-full my-3" for="message">Message</label>
            <textarea
              placeholder="You’re Awesome!"
              v-model="message"
              class="p-4 rounded-2xl bg-gray-100 mt-3 w-full"
              cols="30"
              rows="8"
            ></textarea>
          </div>
          <div class="w-full p-4 cursor-pointer">
            <h1>Services</h1>
            <ul class="flex mt-10 flex-wrap">
              <li
                class="
                  m-2
                  px-4
                  py-2
                  rounded-full
                  border-pink-400 border
                  text-pink-400
                  hover:bg-pink-200
                  hover:text-pink-600
                  opacity-50
                  hover:opacity-1
                "
                :class="
                  service == 'React Frontend' ? 'bg-pink-200 text-pink-600 opacity-1' : ''
                "
                @click="service = 'React Frontend'"
              >
                React Frontend
              </li>
              <li
                class="
                  m-2
                  px-4
                  py-2
                  rounded-full
                  border-pink-400 border
                  text-pink-400
                  hover:bg-pink-200
                  hover:text-pink-600
                  opacity-50
                  hover:opacity-1
                "
                :class="
                  service == 'UX Research' ? 'bg-pink-200 text-pink-600 opacity-1' : ''
                "
                @click="service = 'UX Research'"
              >
                UX Research
              </li>
              <li
                class="
                  m-2
                  px-4
                  py-2
                  rounded-full
                  border-pink-400 border
                  text-pink-400
                  hover:bg-pink-200
                  hover:text-pink-600
                  opacity-50
                  hover:opacity-1
                "
                :class="
                  service == 'Content Creator'
                    ? 'bg-pink-200 text-pink-600 opacity-1'
                    : ''
                "
                @click="service = 'Content Creator'"
              >
                Content Creator
              </li>
              <li
                class="
                  m-2
                  px-4
                  py-2
                  rounded-full
                  border-pink-400 border
                  text-pink-400
                  hover:bg-pink-200
                  hover:text-pink-600
                  opacity-50
                  hover:opacity-1
                "
                :class="
                  service == 'Graphic Designer'
                    ? 'bg-pink-200 text-pink-600 opacity-1'
                    : ''
                "
                @click="service = 'Graphic Designer'"
              >
                Graphic Designer
              </li>
              <li
                class="
                  m-2
                  px-4
                  py-2
                  rounded-full
                  border-pink-400 border
                  text-pink-400
                  hover:bg-pink-200
                  hover:text-pink-600
                  opacity-50
                  hover:opacity-1
                "
                :class="service == 'Other' ? 'bg-pink-200 text-pink-600 opacity-1' : ''"
                @click="service = 'Other'"
              >
                Other
              </li>
            </ul>
          </div>
          <button
            class="mx-auto bg-pink-400 text-white rounded-3xl px-20 py-3 mt-10"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  data() {
    return {
      fullname: "",
      email: "",
      message: "",
      service: "",
    };
  },
};
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
  background: linear-gradient(91.22deg, #a568ef 16%, #ff9191 103.7%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>