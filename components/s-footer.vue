<template>
  <footer class="footer">
    <div
      class="footer-menu
      "
    >
      <div class="f-menu-community">
        <strong class="subtitle">Community</strong>
        <ul class="body-2">
          <li>
            <a href="#" target="_BLANK">Twitter </a>
          </li>
          <li>
            <a href="#" target="_BLANK">Telegram </a>
          </li>
          <li>
            <a href="#" target="_BLANK">Discord </a>
          </li>
          <li>
            <a href="#" target="_BLANK">Medium </a>
          </li>
        </ul>
      </div>
      <div class="f-menu-leanguage">
        <strong class="subtitle">Language</strong>
        <ul class="body-2">
          <li>English</li>
          <li>Chinese</li>
          <li>Spanish</li>
        </ul>
      </div>
    </div>

    <div class="footer-logo">
      <div class="footer-logo-flex">
        <img width="72px" height="72px" src="/logo.png" alt="Logo SCGF" />
        <h6>
          SecretChainGirl <br />
          Foundation
        </h6>
      </div>
    </div>

    <a href="#" target="_BLANK" class="footer-cr"
      >© 2021 SecretChainGirl Foundation</a
    >
  </footer>
</template>

<style lang="scss">
.footer {
  background: linear-gradient(96deg, #a769ec 31.04%, #f28b9d 90.69%);
  border-radius: 33px 33px 0px 0px;
  padding: 80px 140px;
  height: 361px;
  position: relative;
  color: #ffffff;
  .subtitle {
    margin-bottom: 24px;
  }
  .footer-logo {
    .footer-logo-flex{
      display: flex;
      align-items: center;
    }
    h6 {
      margin-left: 16px;
      @media only screen and (max-width: 768px) {
        font-size: 15px;
      }
    }
    @media only screen and (max-width: 768px) {
      display: block;
      width: 100%;
      .footer-logo-flex{
         width: 100%;
         padding-top: 24px;
         margin-bottom: 27px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: auto;
    padding: 43px 67px;

  }
}
.footer-menu {
  float: right;
  display: flex;
  .f-menu-community{
    padding-right: 140px;
     @media only screen and (max-width: 768px) {
      padding-right: 0;
      width: 100%;
    }
  }
  .f-menu-leanguage {
    padding-right: 50px;
    @media only screen and (max-width: 768px) {
      padding-right: 0;
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    float: left;
    flex-wrap: wrap;
    width: 100%;
  }
}

.footer-cr {
  position: absolute;
  bottom: 10px;
  right: 140px;
  color: #ffffff;
  padding: 17px;
    opacity: 0.8;

  @media only screen and (max-width: 768px) {
    right: 0;
    width: 100%;
    text-align: center;
    padding:  27px;
  }
}
.footer ul {
  list-style: none;
  li {
    padding-bottom: 16px;
    opacity: 0.8;
  }
  li a {
    color: #ffffff;
  }
}
</style>
