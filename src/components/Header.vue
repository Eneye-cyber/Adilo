<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const show = ref(false)
const router = useRouter()
function goto(arg) {
  show.value = false
  router.push(arg)
}
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
          <li><router-link to="/" class="nav-link" >Projects</router-link></li>
          <li class="relative">
            <a @click.prevent="show = !show" class="nav-link item-center active">Tools & App 
              <span class="material-symbols-outlined">expand_more</span>
            </a>
            <div v-if="show" class="dropdown">
              <div @click="(e) => goto('/')" class="dropdown__children text-md active">Snapbyte Recorder</div>
              <div @click="(e) => goto('/')" class="dropdown__children text-md">AudioBounce</div>
              <div @click="(e) => goto('/')" class="dropdown__children text-md">Sugar Voice</div>
            </div>
          </li>
          <li><router-link to="/" class="nav-link" >Channels</router-link></li>
          <li><router-link to="/" class="nav-link" >Contacts</router-link></li>
          <li><router-link to="/" class="nav-link" >Analytics</router-link></li>
          <li><router-link to="/" class="nav-link" >Settings</router-link></li>
        </ul>
      </nav>

      <div class="header__profile flex item-center">
        <router-link to="/" class="header__profile-link text-lg" >Help</router-link>
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

