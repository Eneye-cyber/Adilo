<script setup>

</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo flex centered">
        <div class="header__logo-image flex centered"><div></div></div>
        <h2 class="header__logo-text ">Adilo</h2>
      </div>

      <nav class="header__nav flex">
        <ul class="flex item-center w-full">
          <li><a class="nav-link" href="#">Projects</a></li>
          <li>
            <a class="nav-link item-center active" href="#">Tools & App 
              <span class="material-symbols-outlined">expand_more</span>
            </a>
          </li>
          <li><a class="nav-link" href="#">Channels</a></li>
          <li><a class="nav-link" href="#">Contacts</a></li>
          <li><a class="nav-link" href="#">Analytics</a></li>
          <li><a class="nav-link" href="#">Settings</a></li>
        </ul>
      </nav>

      <div class="header__profile flex item-center">
        <a class="header__profile-link text-lg" href="#">Help</a>
        <div class="divider"></div>
        <div class="flex item-center">
          <div class="header__profile-image">

          </div>
          <div>
            <p class="header__profile-name text-md text--black">Cody Fisher</p>
            <p class="header__profile-email text-xs text--link">CodyFisher@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

