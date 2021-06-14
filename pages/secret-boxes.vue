<template>
  <div class="flex justify-center w-full flex-wrap pt-40 lg:pt-48 relative">
    <img class="bg-2" src="/bg2.jpg" alt="Bg 1" style="z-index: -1" />
    <main class="w-full z-10 relative">
      <div class="w-full lg:w-4/6 mx-auto glass-card p-10">
        <div class="flex w-full flex-wrap">
          <h1 class="text-3xl lg:text-5xl text-black p-10">Secret Boxes</h1>
          <div class="w-full p-10 pt-0">
            <p>
              Quickstarts to help you build decentralized, privacy preserving
              dApps on the Secret Network. Each box comes with everything you
              need to start building and includes libraries, secret contracts
              and beautiful UI elements so you can focus on coding your
              functionality. Secret Boxes can be anything from use case
              blueprints to chain integrations, technical bootstraps and more.
            </p>

            <!-- List -->

            <div class="flex w-full flex-wrap lg:px-20">
              <div class="w-full lg:w-1/4 mt-10">
                <lottie-player
                  src="https://assets5.lottiefiles.com/private_files/lf30_sqamzndl.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  class="w-2/3 lg:w-full lg:pr-20 mx-auto pl-24 lg:pl-0"
                ></lottie-player>
              </div>
              <div class="w-full lg:w-3/4 mt-10">
                <h1 class="my-3 text-center lg:text-left">
                  <span class="text-gradient text-3xl font-semibold"
                    >Secret Counter</span
                  >
                </h1>
                <p class="flex flex-wrap">
                  This is the starting point for learning about Secret
                  Contracts. Based on the “simple counter” secret contract this
                  box illustrates the basics of querying and modifying contract
                  state using the “getCount” and “increment” messages.

                  <a
                    href="#"
                    class="
                      btn-pink btn-icon
                      text-white
                      rounded-full
                      px-8
                      py-2
                      flex
                      items-center
                      mt-5
                    "
                  >
                    Learn More
                    <svg
                      class="ml-2"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.477067 4.45067C0.2082 4.4848 4.9189e-07 4.7178 5.16549e-07 4.99987C5.43265e-07 5.30547 0.244333 5.55347 0.545466 5.55347L10.1338 5.55347L6.6698 9.05423L6.6208 9.11077C6.45747 9.32726 6.47367 9.63843 6.66833 9.83734C6.88073 10.0536 7.2262 10.0543 7.43927 9.83882L11.8393 5.3918L11.8878 5.33613C11.9616 5.23873 12 5.1198 12 4.99987C12 4.92827 11.9862 4.85667 11.9585 4.7888C11.8742 4.5814 11.6756 4.44634 11.4545 4.44634L0.545466 4.44634L0.477067 4.45067ZM6.66827 0.162669C6.45593 0.379669 6.45593 0.730268 6.66973 0.945802L9.09665 3.39847L9.15269 3.448C9.36701 3.61307 9.6729 3.59587 9.86757 3.397C9.97375 3.28847 10.0268 3.14754 10.0268 3.00654C10.0268 2.86407 9.97375 2.72234 9.86611 2.61387L7.43993 0.161203L7.38389 0.111803C7.16947 -0.0527311 6.86293 -0.0355983 6.66827 0.162669Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="rounded-full px-8 py-2 flex items-center mt-5"
                  >
                    <span class="text-gradient">Repo </span>
                    <svg
                      class="ml-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58267 0 0 3.67255 0 8.20224C0 11.8263 2.292 14.9007 5.47133 15.9855C5.87067 16.0614 6 15.8071 6 15.5911V14.0641C3.77467 14.5603 3.31133 13.0962 3.31133 13.0962C2.94733 12.1482 2.42267 11.896 2.42267 11.896C1.69667 11.3868 2.478 11.3977 2.478 11.3977C3.28133 11.4551 3.704 12.2432 3.704 12.2432C4.41733 13.4968 5.57533 13.1345 6.032 12.9247C6.10333 12.395 6.31067 12.0327 6.54 11.8283C4.76333 11.6198 2.89533 10.9165 2.89533 7.77436C2.89533 6.87826 3.208 6.1469 3.71933 5.57274C3.63667 5.36563 3.36267 4.53106 3.79733 3.40188C3.79733 3.40188 4.46933 3.18179 5.998 4.24261C6.636 4.06079 7.32 3.96989 8 3.96647C8.68 3.96989 9.36467 4.06079 10.004 4.24261C11.5313 3.18179 12.202 3.40188 12.202 3.40188C12.6373 4.53174 12.3633 5.36632 12.2807 5.57274C12.794 6.1469 13.104 6.87895 13.104 7.77436C13.104 10.9247 11.2327 11.6185 9.45133 11.8215C9.738 12.0758 10 12.5747 10 13.3403V15.5911C10 15.8091 10.128 16.0655 10.534 15.9848C13.7107 14.8987 16 11.8249 16 8.20224C16 3.67255 12.418 0 8 0Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="8"
                          y1="0"
                          x2="8"
                          y2="16"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A769EC" />
                          <stop offset="1" stop-color="#F28B9D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </p>
              </div>

              <div class="w-full lg:w-1/4 mt-10">
                <lottie-player
                  src="https://assets2.lottiefiles.com/private_files/lf30_0vbtxqrd.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  class="w-2/3 lg:w-full lg:pr-20 mx-auto pl-24 lg:pl-0"
                ></lottie-player>
              </div>
              <div class="w-full lg:w-3/4 mt-10">
                <h1 class="my-3 text-center lg:text-left">
                  <span class="text-gradient text-3xl font-semibold text-center"
                    >Figment Learn</span
                  >
                </h1>
                <p class="flex flex-wrap">
                  Figment Learn is a fun learning pathway to help developers
                  quickly learn about working with the Secret Network. Using the
                  DataHub gateway you’ll be taken through the steps to deploy a
                  secret contract to the testnet, and even get some SCRT tokens
                  for your efforts!

                  <a
                    href="#"
                    class="
                      btn-pink btn-icon
                      text-white
                      rounded-full
                      px-8
                      py-2
                      flex
                      items-center
                      mt-5
                    "
                  >
                    Learn More
                    <svg
                      class="ml-2"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.477067 4.45067C0.2082 4.4848 4.9189e-07 4.7178 5.16549e-07 4.99987C5.43265e-07 5.30547 0.244333 5.55347 0.545466 5.55347L10.1338 5.55347L6.6698 9.05423L6.6208 9.11077C6.45747 9.32726 6.47367 9.63843 6.66833 9.83734C6.88073 10.0536 7.2262 10.0543 7.43927 9.83882L11.8393 5.3918L11.8878 5.33613C11.9616 5.23873 12 5.1198 12 4.99987C12 4.92827 11.9862 4.85667 11.9585 4.7888C11.8742 4.5814 11.6756 4.44634 11.4545 4.44634L0.545466 4.44634L0.477067 4.45067ZM6.66827 0.162669C6.45593 0.379669 6.45593 0.730268 6.66973 0.945802L9.09665 3.39847L9.15269 3.448C9.36701 3.61307 9.6729 3.59587 9.86757 3.397C9.97375 3.28847 10.0268 3.14754 10.0268 3.00654C10.0268 2.86407 9.97375 2.72234 9.86611 2.61387L7.43993 0.161203L7.38389 0.111803C7.16947 -0.0527311 6.86293 -0.0355983 6.66827 0.162669Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="rounded-full px-8 py-2 flex items-center mt-5"
                  >
                    <span class="text-gradient">Repo </span>
                    <svg
                      class="ml-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.58267 0 0 3.67255 0 8.20224C0 11.8263 2.292 14.9007 5.47133 15.9855C5.87067 16.0614 6 15.8071 6 15.5911V14.0641C3.77467 14.5603 3.31133 13.0962 3.31133 13.0962C2.94733 12.1482 2.42267 11.896 2.42267 11.896C1.69667 11.3868 2.478 11.3977 2.478 11.3977C3.28133 11.4551 3.704 12.2432 3.704 12.2432C4.41733 13.4968 5.57533 13.1345 6.032 12.9247C6.10333 12.395 6.31067 12.0327 6.54 11.8283C4.76333 11.6198 2.89533 10.9165 2.89533 7.77436C2.89533 6.87826 3.208 6.1469 3.71933 5.57274C3.63667 5.36563 3.36267 4.53106 3.79733 3.40188C3.79733 3.40188 4.46933 3.18179 5.998 4.24261C6.636 4.06079 7.32 3.96989 8 3.96647C8.68 3.96989 9.36467 4.06079 10.004 4.24261C11.5313 3.18179 12.202 3.40188 12.202 3.40188C12.6373 4.53174 12.3633 5.36632 12.2807 5.57274C12.794 6.1469 13.104 6.87895 13.104 7.77436C13.104 10.9247 11.2327 11.6185 9.45133 11.8215C9.738 12.0758 10 12.5747 10 13.3403V15.5911C10 15.8091 10.128 16.0655 10.534 15.9848C13.7107 14.8987 16 11.8249 16 8.20224C16 3.67255 12.418 0 8 0Z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="8"
                          y1="0"
                          x2="8"
                          y2="16"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A769EC" />
                          <stop offset="1" stop-color="#F28B9D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </p>
              </div>

              <div class="w-full lg:w-1/4 mt-10">
                <lottie-player
                  src="https://assets10.lottiefiles.com/private_files/lf30_woabmjiz.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  class="w-2/3 lg:w-full lg:pr-20 mx-auto pl-24 lg:pl-0"
                ></lottie-player>
              </div>
              <div class="w-full lg:w-3/4 mt-10">
                <h1 class="my-3 text-center lg:text-left">
                  <span class="text-gradient text-3xl font-semibold text-center"
                    >Richie Rich</span
                  >
                </h1>
                <p class="flex flex-wrap">
                  How do you find out who’s the richest without revealing your
                  net worth to the world? This secret box, based on Yao’s
                  Millionaires’ Problem, illustrates how that can be done with
                  secret contracts.

                  <a
                    href="#"
                    class="
                      btn-pink-link btn-icon
                      text-white
                      rounded-full
                      px-8
                      py-2
                      flex
                      items-center
                      mt-5
                    "
                  >
                    <span class="text-gradient">Coming Soon</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full text-center text-xl py-14 text-primary">
          <a href="#"> Visit Secret Box Website </a>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
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

.glass-card {
  background: linear-gradient(
    104.93deg,
    #ffffff 3.26%,
    rgba(255, 255, 255, 0) 92.12%
  );
  backdrop-filter: blur(28px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 75px 0px 0 0;
}
.text-gradient {
  background: linear-gradient(91.22deg, #a568ef 16%, #ff9191 103.7%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn-pink-link {
  background: #fce3ee;
}
.btn-pink {
  background: #f7b5d2;
}
.btn-pink:hover {
  background: #ff94c3;
}
.btn-icon svg {
  display: none;
}
.btn-icon:hover svg {
  display: block;
}
</style>