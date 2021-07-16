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
      <img class="bg-il-1-md" src="/il-1-md.png" alt="Il 1 Md" />


      <div class="bg-b"></div>
    </section>
    <section class="secret-boxes" id="secret-boxes">
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
      <nuxt-link class="btn btn-explore btn-exlpore-mobile" to="/secret-boxes">
          Explore more
      <s-nav-icon />
      </nuxt-link>
    </section>
    <section class="mission" id="about">
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
          <span>About Us</span>
        </div>
        Mission
      </div>
      <div class="mission-desc">
        Developer adoption of the Secret Network by creating Secret Boxes for
        key use cases. Passionate about helping developers create beautifully
        designed Secret Apps.
      </div>
      <div class="mission-img">
        <lottie-player
          class="img"
          src="https://assets3.lottiefiles.com/private_files/lf30_iakk850x.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </section>
    <section class="contributors" id="contributors">
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
    <section class="work" id="work-with-us">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            pulvinar suspendisse nunc a. Dictumst blandit amet nunc feugiat
            gravida. Sagittis, in iaculis vestibulum, rhoncus scelerisque
            scelerisque dignissim odio. Amet nisl, tristique sed pharetra
            molestie donec elit rutrum quisque. Eget augue non mauris est. Eu
            sed et est lorem enim morbi. Viverra aliquet cursus habitant dolor
            purus. Dolor augue eu sit in.
          </p>
          <p class="work-text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
            pulvinar suspendisse nunc a. Dictumst blandit amet nunc feugiat
            gravida
          </p>
          <nuxt-link class="btn btn-explore" to="/work-with-us">
            Let’s Go
            <s-nav-icon />
          </nuxt-link>
        </div>
        <div class="work-content-right">
          <lottie-player
            class="lottie"
            src="https://assets7.lottiefiles.com/private_files/lf30_bxgf8h5h.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </section>

    <div class="bg-gradient-1"></div>
    <div class="bg-gradient-2"></div>
    <div class="bg-gradient-3"></div>
    <div class="bg-gradient-4"></div>
    <div class="bg-gradient-5"></div>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/index';
</style>