<template>
  <div>
    <section class="hero-section">
      <!-- Content -->
      <div class="hero-title text-gradient">SecretChainGirl Foundation</div>
      <p class="hero-subtitle">
        We’re passionate about helping developers build privacy-centric DApps
      </p>
      <nuxt-link class="btn btn-explore" to="/explore-more">
        <span class="ex-text-lg">See Our Projects</span>
        <span class="ex-text-md">Explore more</span>
        <s-nav-icon />
      </nuxt-link>
      <img class="bg-il-1" src="/il-1.png" alt="Il 1" />

      <div class="bg-b"></div>
    </section>
    <section class="secret-boxes">
      <div class="secret-box-title">
        <div class="secret-box-subtitle">
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
      </div>
      <div class="secret-box-desc">
        Secret Boxes are quickstarts to help you build decentralized, privacy
        preserving dApps on the Secret Network.
        <br />
        <nuxt-link class="btn btn-explore" to="/secret-boxes">
          Explore more
          <s-nav-icon />
        </nuxt-link>
      </div>
      <div class="box-list">
        <div class="box-list-item">
           <lottie-player
                src="https://assets5.lottiefiles.com/private_files/lf30_sqamzndl.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                class="lottie-box"
          ></lottie-player>
          <span>Secret Counter</span>
        </div>
        <div class="box-list-item">
          <lottie-player
                src="https://assets2.lottiefiles.com/private_files/lf30_0vbtxqrd.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                 class="lottie-box"
              ></lottie-player>
          <span>Figment Learn</span>
        </div>
        <div class="box-list-item">
         <lottie-player
                src="https://assets10.lottiefiles.com/private_files/lf30_woabmjiz.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                class="lottie-box"

              ></lottie-player>
          <span>Richie Rich</span>
        </div>
      </div>
    </section>
    <section class="mission">
      <div class="mission-title">
        <div class="mission-subtitle">
          <svg
            width="32"
            height="3"
            viewBox="0 0 32 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="3" fill="#803DFF" />
          </svg>
          About Us
        </div>
        Mission
      </div>
      <div class="mission-desc">
        Developer adoption of the Secret Network by creating Secret Boxes for
        key use cases. Passionate about helping developers create beautifully
        designed Secret Apps.
      </div>
      <div class="mission-img">
          <lottie-player class="img" src="https://assets3.lottiefiles.com/private_files/lf30_iakk850x.json" 
          background="transparent" speed="1" 
          loop autoplay></lottie-player>
      </div>
    </section>
    <section class="contributors">
      <div class="contributor-title">
        <div class="contributor-subtitle">
          <svg
            width="32"
            height="3"
            viewBox="0 0 32 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="3" fill="#8440FF" />
          </svg>
        </div>
        Contributors
      </div>
      <s-contributors />
    </section>
    <section class="work">
      <div class="work-title">
        <div class="work-subtitle">
          <svg
            width="32"
            height="3"
            viewBox="0 0 32 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="3" fill="#8440FF" />
          </svg>
        </div>
        Work with us
      </div>
      <div class="work-content">
        <div class="work-content-left">
          <p class="work-text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pulvinar
            suspendisse nunc a. Dictumst blandit amet nunc feugiat gravida.
            Sagittis, in iaculis vestibulum, rhoncus scelerisque scelerisque
            dignissim odio. Amet nisl, tristique sed pharetra molestie donec elit
            rutrum quisque. Eget augue non mauris est. Eu sed et est lorem enim
            morbi. Viverra aliquet cursus habitant dolor purus. Dolor augue eu sit
            in.
          </p>
          <p class="work-text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pulvinar suspendisse nunc a. Dictumst blandit amet nunc feugiat gravida 
          </p>
          <nuxt-link class="btn btn-explore" to="/work-with-us">
            Let’s Go
            <s-nav-icon />
          </nuxt-link>
        </div>
        <div class="work-content-right">
           <lottie-player class="img" src="https://assets7.lottiefiles.com/private_files/lf30_bxgf8h5h.json" 
          background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      </div>
    </section>

    <div class="bg-gradient-1"></div>
    <div class="bg-gradient-2"></div>
    <div class="bg-gradient-3"></div>
    <div class="bg-gradient-4"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.btn-explore {
  margin-top: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: #6900f4;
  display: flex;
  align-items: center;
  .ex-text-lg {
    display: block;
    @media only screen and (max-width: 1080px) {
      display: none;
    }
  }
  .ex-text-md {
    display: none;
    @media only screen and (max-width: 1080px) {
      display: block;
      font-size: 16px;
    }
  }
}

.hero-section {
  padding-top: 230px;
  width: 100%;
  height: 1032px;
  background-image: url("/bg-page-1.png");
  background-size: cover;
  @media only screen and (max-width: 1080px) {
    height: 600px;
    padding-top: 125px;
    padding-bottom: 125px;
  }
  .hero-title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 78px;
    text-align: center;
    letter-spacing: 1px;
    width: 513px;
    margin: auto;
    @media only screen and (max-width: 1080px) {
      width: 325px;
      font-size: 40px;
      line-height: 45px;
    }
  }
  .hero-subtitle {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.25px;
    color: #4e4b66;
    width: 513px;
    margin: auto;
    margin-top: 32px;
    @media only screen and (max-width: 1080px) {
      width: 274px;
      font-size: 14px;
      line-height: 19px;
      margin-top: 15px;
    }
  }

  .btn-explore {
    width: 100%;
    margin: auto;
    z-index: 1000;
    position: absolute;
    left: 40%;
    width: 20%;
    margin-top: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1080px) {
      left: 10%;
      width: 80%;
      margin-top: 56px;
    }
  }
}

.bg-il-1 {
  position: absolute;
  width: 80%;
  height: auto;
  left: 10%;
  top: 288px;
  z-index: 2;
  @media only screen and (max-width: 1080px) {
    width: 96%;
    left:2%
  }
}
.bg-b {
  background-image: url("/bg-page-1-b.png");
  background-size: cover;
  position: absolute;
  width: 100%;
  left: 0;
  top: 900px;
  height: 167px;
  @media only screen and (max-width: 1080px) {
    top: 450px;
  }
}

.secret-boxes {
  width: 88%;
  margin-left: 12%;
  padding: 43px 24px;
  padding-right: 12%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: linear-gradient(
    104.93deg,
    #ffffff 3.26%,
    rgba(255, 255, 255, 0) 92.12%
  );
  backdrop-filter: blur(28px);
  border-radius: 75px 0px 75px 75px;
  @media only screen and (max-width: 1080px) {
    width: 100%;
    margin-left: 0%;
    padding: 20px;
    margin-top: 88px;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 24px;
  }
  .secret-box-title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 50px;
    letter-spacing: 1px;
    color: #000000;
    width: 35%;
    @media only screen and (max-width: 1080px) {
      width: 100%;
    }
  }
  .secret-box-title {
    margin-top: -60px;
  }
  .secret-box-desc {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    padding-left: 43px;
    color: #000000;
    width: 65%;
    @media only screen and (max-width: 1080px) {
      width: 100%;
      padding: 10px;
      padding-left: 0;
    }
  }

  .box-list {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    @media only screen and (max-width: 1080px) {
      flex-wrap: wrap;
      margin-top: 30px;
      margin-bottom: 50px;
    }
    .box-list-item {
      width: 100%;
      @media only screen and (max-width: 1080px) {
        width: 50%;
        margin-bottom:50px
      }
      span {
        font-family: "Poppins";
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.75px;
        color: #000000;
        padding-top: 34px;
        width: 100%;
        justify-content: center;
      }
      img {
        margin: auto;
      }
      .img-md {
        display: none;
      }
      .img-lg {
        display: block;
      }
      @media only screen and (max-width: 1080px) {
        .img-md {
          display: block;
        }
        .img-lg {
          display: none;
        }
      }
    }
  }
}

.mission {
  padding: 0 24px;
  width: 88%;
  margin-left: 12%;
  padding: 43px;
  padding-right: 12%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  @media only screen and (max-width: 1080px) {
    width: 100%;
    margin-left: 0%;
    padding: 20px;
  }
  .mission-title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 50px;
    letter-spacing: 1px;
    color: #000000;
    width: 30%;
    padding: 43px;
    @media only screen and (max-width: 1080px) {
      width: 100%;
      padding: 10px;
    }
  }
  .mission-subtitle {
    margin-top: -40px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.75px;
    display: flex;
    align-items: center;
    color: #8440ff;
    svg {
      margin-right: 10px;
    }
  }
  .mission-desc {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    padding: 43px;
    color: #000000;
    width: 70%;
    @media only screen and (max-width: 1080px) {
      width: 100%;
      padding: 10px;
    }
  }
  .mission-img img, .mission-img .img {
    max-width: 100%;
    margin-left: -100px;
    @media only screen and (max-width: 1080px) {
      margin-left: 0;
    }
  }
}

.contributors {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  position: relative;
  .contributor-title {
    /* Contributors */
    position: absolute;
    width: 316px;
    height: 50px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 50px;
    /* identical to box height, or 104% */

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    letter-spacing: 1px;
    color: #000000;

    @media only screen and (max-width: 1080px) {
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left;
      width: 100%;
      padding: 5%;
    }

    .contributor-subtitle {
      position: absolute;
      top: -60px;
      margin: auto;
    }
  }
}

.work {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 100px;
  margin-top: 150px;

  .work-title {
    width: 100%;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    letter-spacing: 1px;
    color: #000000;
    .work-subtitle {
      position: absolute;
      margin-top: -60px;
    }
  }

  .work-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    .work-content-left {
      width: 55%;
      font-family: "Poppins";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: 0.75px;
      color: #000000;
      .work-text-lg{
        display: block;
        @media only screen and (max-width: 1080px) {
          display: none;
        }
      }
      .work-text-md{
        display: none;
        @media only screen and (max-width: 1080px) {
          display: block;
        }
      }
      @media only screen and (max-width: 1080px) {
        width: 100%;
      }
      .btn {
        @media only screen and (max-width: 1080px) {
          display: flex;
          justify-content: center;
          padding: 34px 0;
        }
      }
    }
    .work-content-right {
      padding: 34px 0;
    }
    .work-content-right img, .work-content-right .img {
      max-width: 100%;
    }
  }
}

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
  z-index: -1;
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
  z-index: -1;
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
  z-index: -1;
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
  z-index: -1;
}

@media only screen and (max-width: 1080px) {
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
}


</style>
