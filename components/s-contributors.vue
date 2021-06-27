<template>
  <div class="contributor-list">
    <div
      class="contributor-list-item"
      v-for="i in $store.state.contributors"
      :key="i.id"
    >
      <div class="container-item">
        <img class="bg-user" :src="`/user/${i.img}`" :alt="`User ${i.id}`" />
        <h6 class="c-name">{{ i.name }}</h6>
        <small class="body-1 c-title">{{ i.title }}</small>

        <img class="bg-fiter" src="/filter.jpg" alt="filter" />

        <s-sosmed-contributor :sosmed="i.sosmed" :address="i.address" />
      </div>
    </div>

    <img class="il_cr_1" src="/il/_crystal-1.png" alt="cr 1" />
    <img class="il_cr_2" src="/il/_crystal-2.png" alt="cr 2" />
    <img class="il_cr_3" src="/il/_crystal-3.png" alt="cr 3" />
    <img class="il_cr_4" src="/il/_crystal-4.png" alt="cr 4" />
  </div>
</template>
<style lang="scss">
.contributor-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12%;
  padding-top: 100px;
  @media only screen and (max-width: 1080px) {
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 50px;
  }
  .contributor-list-item {
    width: 25%;
    @media only screen and (max-width: 1080px) {
      width: 50%;
    }
    .container-item {
      position: relative;
      margin: 5%;
      width: 90%;
      height: auto;
      display: flex;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      .bg-user {
        width: 100%;
      }
      .c-name {
        width: 100%;
        padding: 16px 38px;
        color: #222222;
        @media only screen and (max-width: 500px) {
          padding: 8px 0;
          font-size: 20px;
        }
      }
      .c-title {
        width: 100%;
        padding: 16px 38px;
        @media only screen and (max-width: 500px) {
          padding: 8px 0;
          font-size: 16px;
        }
      }
    }
    .bg-fiter {
      position: absolute;
      width: 100%;
      opacity: 0.75;
      display: none;
    }
    .contributor-sosmed {
      position: absolute;
      top: 25%;
      display: none;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 10%;
      @media only screen and (max-width: 500px) {
        top: 5%;
      }
      .c-icon {
        margin-bottom: 10%;
        padding: 8px;
        color: #4e4b66;
        border: 1px solid #4e4b66;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media only screen and (max-width: 768px) {
          margin: 10px;
        }
        svg {
          width: 14px;
          height: 14px;
        }
      }
      .c-address {
        margin-top: 24px;
        text-align: center;
        width: 100%;
        color: #222222;

        @media only screen and (max-width: 768px) {
          font-family: "Segoe UI";
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 24px;
          margin-top: 0;
        }
      }
      .c-icon:hover {
        color: white;
        border: 1px solid transparent;
        background: linear-gradient(180deg, #a769ec 0%, #f28b9d 100%);
      }
    }
  }
  .contributor-list-item:hover .bg-fiter {
    display: block;
  }
  .contributor-list-item:hover .contributor-sosmed {
    display: flex;
  }

  .il_cr_1 {
    position: absolute;
    top: 35%;
    left: 2%;
  }
  .il_cr_2 {
    position: absolute;
    top: 25%;
    right: 5%;
  }
  .il_cr_3 {
    position: absolute;
    bottom: 5%;
    left: 2%;
  }
  .il_cr_4 {
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
  @media only screen and (max-width: 1080px) {
    .il_cr_1 {
      width: 20%;
      left: 5%;
      top: 7%;
      transform: rotate(20deg);
    }
    .il_cr_2 {
      width: 20%;
      right: -2%;
      top: 28%;
    }
    .il_cr_4 {
      width: 20%;
      left: -2%;
      bottom: 20%;
      transform: rotate(-20deg);

    }
      .il_cr_3 {
      width: 15%;
      left: auto;
      right: 2%;
      bottom: -5%;
    }
  }
}
</style>
