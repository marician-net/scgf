<template>
  <div class="page-section">
    <div class="page-title">
       <span class="text-gradient">Work With Us</span>
      </div>
      <p class="page-desc">
        Help us on our quest to make Secret Network Ecosystem even better.
      </p>
    <div class="page-container">
      <div class="form-title">Contact Form</div>
      <form action="#" @submit.prevent="actionData()" class="form">
        <div class="form-left">
          <div class="form-group">
          <label class="body-1" for="fullname">Full name</label>
          <div class="input-group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="#6E7191" stroke-width="2"/>
              <circle cx="12.0001" cy="7.76476" r="2.52941" stroke="#6E7191" stroke-width="2"/>
              <path d="M18.3529 19.7648C18.3529 17.8926 17.6835 16.0972 16.4921 14.7734C15.3007 13.4496 13.6848 12.7059 11.9999 12.7059C10.315 12.7059 8.69911 13.4496 7.50771 14.7734C6.3163 16.0972 5.64697 17.8926 5.64697 19.7648" stroke="#6E7191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <input type="text" name="fullname" v-model="input.fullname" placeholder="Jane Doe">
         </div>
        </div>
        <div class="form-group">
          <label class="body-1" for="email">Email</label>
          <div class="input-group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6E7191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="#6E7191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <input type="text" name="email" v-model="input.email" placeholder="janedoe@gmail.com">
         </div>
        </div>
        </div>
        <div class="form-right">
           <div class="form-group">
            <label class="body-1" for="message">Message</label>
            <textarea name="message" cols="30" rows="7" placeholder="You’re Awesome!"
            v-model="input.message"
            ></textarea>
          </div>
        </div>
        <div class="button-form-service">
          <label for="service" class="label">Service</label>
          <div v-for="service in services" :key="service"
          @click="input.service = service"
          :class="(input.service == service) ? 'item-service active' : 'item-service'"
          >
            {{ service}}
          </div>
        </div>
        <button class="btn-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  scrollToTop: true,
  data(){
    return {
      input: {
        fullname: '',
        email: '',
        message: '',
        service: ''
      },
      services: ['React Front End','UX Researcher','Content Creator','Graphic Designer','Other']
    }
  },
  methods:{
    actionData(){
      console.log(this.input)
    }
  }
};
</script>

<style lang="scss" scoped>
.page-section {
  width: 100%;
  padding-left:5%;
  background-image: url("/bg-page-form.png");
  background-size: cover;
  padding-top: 210px;
  padding-bottom: 250px;
  @media only screen and (max-width: 768px) {
    background-image: url("/bg-page-2-md.png");
    padding: 0;
    padding-top: 125px;
  }

  .page-title{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 78px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      font-size: 39.3846px;
      line-height: 48px;
    }
  }
  .page-desc{
    font-family: 'Segoe UI';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.25px;
    color: #4E4B66;
        opacity: .8;

    justify-content: center;
    @media only screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
      margin-top: 15px;
    }

  }
  .page-container {
    width: 100%;
    background: linear-gradient(
      89.05deg,
      #ffffff 45.73%,
      rgba(255, 255, 255, 0) 105.23%
    );
    backdrop-filter: blur(28px);
    border-radius: 40px 0px 40px 40px;
    padding: 68px;
    margin-top: 69px;
    @media only screen and (max-width: 768px) {
      padding: 30px;
      padding-bottom: 100px;
    }

    .form-title{
        font-family: 'Segoe UI';
        font-style: normal;
        font-weight: normal;
        font-size: 34px;
        line-height: 45px;
        display: flex;
        align-items: center;
        letter-spacing: 0.25px;
        color: #4E4B66;

      @media only screen and (max-width: 768px) {
        font-family: Segoe UI;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 32px;
        /* identical to box height */

        display: flex;
        align-items: center;

        /* Grayscale / Body */

        color: #4E4B66;
      }
    }

    .form{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding-right:20%;
      color: #A0A3BD;
      @media only screen and (max-width: 768px) {
          padding-right:0%;
      }
      .form-left{
        width: 45%;
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }
      .form-right{
        width: 55%;
        padding-left:50px;
        @media only screen and (max-width: 768px) {
          width: 100%;
        padding-left:0;
        }
      }
      .form-group{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        label{
          padding:12px 0;
          width: 100%;
        }
        padding: 12px 0;
      }
      .input-group{
        width: 100%;
        display: flex;
        background: #EFF0F7;
        border-radius: 16px;
        padding: 10px 16px;
        align-items: center;
        opacity: .8;
        input{
          width: 100%;
          border:0;
          padding:10px;
          background:transparent;
          font-size: 16px;
        }
        input:focus{
            outline: none;
        }
      }
      textarea{
        width: 100%;
        display: flex;
        background: #EFF0F7;
        border-radius: 16px;
        padding: 20px;
        align-items: center;
        border:0;
        opacity: .8;
        font-size: 16px;

      }
      .button-form-service{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin:50px 0;
        .label{
          width: 100%;
          padding:0 12px;
          padding-bottom: 12px;
        }
        .item-service{
          padding: 5px 16px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: 1.25px;
          text-transform: capitalize;
          color: #F7B5D2;
          border: 1px solid #F7B5D2;
          margin:10px;
          border-radius: 30px;
          cursor: pointer;
        @media only screen and (max-width: 768px) {
           margin:5px 2px;
        }
        }
        .item-service:hover, .item-service.active{
          color: #9F109A;
          background:#FCE3EE;
        }
      }

       .btn-submit{
          background: #F7B5D2;
          border-radius: 32px;
          border: 0;
          padding: 14px 24px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #FCFCFC;
          min-width: 353px;
          max-width: 100%;
          cursor: pointer;

          @media only screen and (max-width: 768px) {
            min-width: auto;
            width: 100%;
            margin:auto
          }

        }
         .btn-submit:hover{
          background: #eca9c6;
         }
    }
  }
}
</style>
