<template>
    <div class="contributor-list">
            <div
              class="contributor-list-item"
              v-for="i in $store.state.contributors"
              :key="i.id"
            >
              <div class="container-item">
                <img
                  class="bg-user"
                  :src="`/user/${i.img}`"
                  :alt="`User ${i.id}`"
                />
                  <h6 class="c-name">{{ i.name }}</h6>
                  <small class="body-1 c-title">{{ i.title }}</small>


                  <img
                      class="bg-fiter"
                      src="/filter.jpg"
                      alt="filter"
                    />
                <s-sosmed-contributor  :sosmed="i.sosmed" :address="i.address" />

              </div>

            </div>
      </div>
</template>
<style lang="scss">
.contributor-list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 12%;
  padding-top:100px;
    @media only screen and (max-width: 1080px) {
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 50px;
    }
  .contributor-list-item{
    width: 25%;
    @media only screen and (max-width: 1080px) {
      width: 50%;
    }
    .container-item{
      position: relative;
      margin: 5%;
      width: 90%;
      height: auto;
      display: flex;
      justify-content: center;
      text-align: center;
      flex-wrap: wrap;
      .bg-user{
        width: 100%;
      }
      .c-name{
        width: 100%;
        padding: 16px 38px;
        @media only screen and (max-width: 500px) {
          padding: 8px 0;
          font-size: 20px;
        }
      }
      .c-title{
        width: 100%;
        padding: 16px 38px;
        @media only screen and (max-width: 500px) {
         padding: 8px 0;
         font-size: 16px;
        }
      }
    }
    .bg-fiter{
      position: absolute;
      width: 100%;
      opacity: 0.75;
      display: none;
    }
    .contributor-sosmed{
      position: absolute;
      top:30%;
      display: none;
       .c-icon{
          width: 25%;
          color: #4E4B66;
          border: 1px solid #4E4B66;
          border-radius: 50%;
          padding: 8px;
          @media only screen and (max-width: 500px) {
            width: 50%;
          }
        }
        .c-address{
          margin-top:39px;
          @media only screen and (max-width: 500px) {
            font-family: 'Segoe UI';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 24px;
          }
        }
        .c-icon:hover{
          color:white;
          border: 1px solid transparent;
          background: linear-gradient(180deg, #A769EC 0%, #F28B9D 100%);
        }
    }
  }
  .contributor-list-item:hover .bg-fiter{
    display: block;
  }
  .contributor-list-item:hover .contributor-sosmed{
    display: block;
  }
}
</style>