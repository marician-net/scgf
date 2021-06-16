<template>
  <footer
    class="
      footer
      w-full
      rounded-xl
      min-h-80
      lg:h-80
      flex flex-wrap
      p-10
      lg:px-32
      text-white
      lg:block
      z-50
    "
  >
    <div
      class="
        w-full
        lg:w-2/5
        flex flex-wrap
        items-start
        p-4
        lg:float-right
        lg:pl-40
      "
    >
      <div class="w-full lg:w-1/2">
        <strong class="py-2 text-xl">Community</strong>
        <ul class="opacity-80 mt-2">
          <li class="py-2">
            <a href="#" target="_BLANK">Twitter </a>
          </li>
          <li class="py-2">
            <a href="#" target="_BLANK">Telegram </a>
          </li>
          <li class="py-2">
            <a href="#" target="_BLANK">Discord </a>
          </li>
          <li class="py-2">
            <a href="#" target="_BLANK">Medium </a>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-16">
        <strong class="py-2 text-xl">Language</strong>
        <ul class="opacity-80 mt-2">
          <li class="py-2">English</li>
          <li class="py-2">Chinese</li>
          <li class="py-2">Spanish</li>
        </ul>
      </div>
    </div>

    <div
      class="
        w-full
        lg:w-3/5
        flex
        items-center
        justify-center
        lg:justify-start
        lg:float-left
        mt-10
      "
    >
      <img src="/logo.png" alt="Logo SCGF" />
      <span class="lg:text-2xl -mt-2 px-4"
        >SecretChainGirl <br />
        Foundation
      </span>
    </div>

    <a
      href="#"
      target="_BLANK"
      class="opacity-80 w-full text-center pt-3 lg:text-right lg:float-right"
      >© 2021 SecretChainGirl Foundation</a
    >
  </footer>
</template>

<style>
.footer {
  background: linear-gradient(96deg, #a769ec 31.04%, #f28b9d 90.69%);
  border-radius: 33px 33px 0px 0px;
}
</style>