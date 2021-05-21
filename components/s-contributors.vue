<template>
    <div class="flex w-full flex-wrap relative">
          <h1 class="w-full text-center text-3xl lg:text-4xl text-black p-10">
            <div class="-mt-5 mb-5 w-full flex justify-center">
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
            Contributor
          </h1>
          <div class="w-full p-10 pt-0 lg:pt-10 flex flex-wrap">
            <div
              class="w-1/2 lg:w-1/4 my-2 p-2 flex flex-wrap text-center c-to-hover relative"
              v-for="i in $store.state.contributors"
              :key="i.id"
            >
              <div class="w-full rounded-lg relative">
                <img
                  class="absolute w-full rounded-lg opacity-90 c-hover"
                  src="/filter.jpg"
                  alt="filter"
                />
                <img
                  class="w-full rounded-lg"
                  :src="`/user/${i.img}`"
                  :alt="`User ${i.id}`"
                />
              </div>
              <s-sosmed-contributor class="c-hover-flex -mt-10" :sosmed="i.sosmed" :address="i.address" />
              <span class="w-full">{{ i.name }}</span>
              <small class="w-full">{{ i.title }}</small>
            </div>
          </div>


        <img class="contributor_crystal" src="/il/_crystal.png" alt="Crystal" />
        <img class="contributor_crystal-1" src="/il/_crystal-1.png" alt="Crystal" />
        <img class="contributor_crystal-2" src="/il/_crystal-2.png" alt="Crystal" />
        <img class="contributor_crystal-3" src="/il/_crystal-3.png" alt="Crystal" />
        </div>
</template>
<style>

.contributor_crystal {
  position: absolute;
  top: 50px;
  right: -5%;
  width: 10%;
}
.contributor_crystal-1 {
  position: absolute;
  top: 700px;
  left: -5%;
  width: 5%;
}
.contributor_crystal-2 {
  position: absolute;
  top: 600px;
  right: -5%;
  width: 10%;
}
.contributor_crystal-3 {
  position: absolute;
  top: 120px;
  left: -5%;
  width: 8%;
}

@media only screen and (max-width: 800px) {
  .contributor_crystal {
    top: 400px;
    right: 0;
  }
  .contributor_crystal-1 {
    top: 50px;
    left: 0;
  }
  .contributor_crystal-2 {
    top: 1200px;
    right: 0;
  }
  .contributor_crystal-3 {
    top: 800px;
    left: 0;
  }
}

</style>