<script lang="ts">
export default {
  emits: ['topbarMenuToggle', 'menuToggle'],
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  },
  methods: {
    // onMenuToggle(event) {
    //   this.$emit('menuToggle', event);
    // },
    // onTopbarMenuToggle(event) {
    //   this.$emit('topbarMenuToggle', event);
    // },
    topbarImage() {
      return this.$appState.darkTheme ? '/images/header/logo.svg' : '/images/header/logo.svg';
    }
  }
};
</script>
<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>
<template>
  <div class="layout-topbar">
    <div class="container px-5 sm:px-0">
      <div class="flex flex-column w-full mb-5  md:flex-row justify-content-between align-items-center">
        <h2 class="mb-0 text-base sm:text-2xl" style="color: #131313;">Ош мамлекеттик университети</h2>
        <img src="/images/header/logo.svg" alt="" class="w-10rem sm:w-20rem mx-0 sm:mx-5 my-3 sm:mt-0">
        <h2 class="mb-0 mt-0 text-base sm:text-2xl" style="color: #000;">Ошский государственный университет</h2>
      </div>
      <div class="flex flex-column md:flex-row justify-content-between w-full">
        <p class="cursor-pointer header-link header-link--main-page" @click="router.push('/')"><i class="pi pi-home mr-2" ></i>Негизги бет</p>
        <div class="flex align-items-center flex-wrap sm:flex-nowrap">
          <p class="header-link header-link--chat cursor-pointer flex align-items-center ml-0 mr-4 md:ml-4 md:mr-0 my-2 md:my-0 flex-order-1 md:flex-order-0" @click="router.push('/chat')"><i class="mr-2 pi pi-comments"></i>Чат (сурап-билүү үчүн)</p>
          <p class="header-link header-link--login cursor-pointer flex align-items-center ml-0 mr-4 md:ml-4 md:mr-0 my-2 md:my-0" @click="router.push('/login')"><i class="mr-2 pi pi-sign-in"></i>кирүү</p>
          <p class="header-link header-link--lang cursor-pointer flex align-items-center ml-0 mr-4 md:ml-4 md:mr-0 my-2 md:my-0"><i class="mr-2 pi pi-language"></i>Кыргызча</p>
        </div>
      </div>
    </div>
<!--    <NuxtLink to="/" class="layout-topbar-logo">-->
<!--      <img alt="Logo" :src="topbarImage()" >-->
<!--      <span>Ош МУ</span>-->
<!--    </NuxtLink>-->
<!--    <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">-->
<!--      <i class="pi pi-bars" />-->
<!--    </button>-->

<!--    <button-->
<!--      v-styleclass="{-->
<!--        selector: '@next',-->
<!--        enterClass: 'hidden',-->
<!--        enterActiveClass: 'scalein',-->
<!--        leaveToClass: 'hidden',-->
<!--        leaveActiveClass: 'fadeout',-->
<!--        hideOnOutsideClick: true-->
<!--      }"-->
<!--      class="p-link layout-topbar-menu-button layout-topbar-button"-->
<!--    >-->
<!--      <i class="pi pi-ellipsis-v" />-->
<!--    </button>-->
<!--    <ul class="layout-topbar-menu hidden lg:flex origin-top">-->
<!--      <li>-->
<!--        <button class="p-link layout-topbar-button">-->
<!--          <i class="pi pi-calendar" />-->
<!--          <span>Events</span>-->
<!--        </button>-->
<!--      </li>-->
<!--      <li>-->
<!--        <button class="p-link layout-topbar-button">-->
<!--          <i class="pi pi-cog" />-->
<!--          <span>Settings</span>-->
<!--        </button>-->
<!--      </li>-->
<!--      <li>-->
<!--        <button class="p-link layout-topbar-button">-->
<!--          <i class="pi pi-user" />-->
<!--          <span>Profile</span>-->
<!--        </button>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>
<style>
.topbar{
  .p-menuitem-icon{
    margin-right: 8px;
  }
}
.header-link{
  color: black !important;
  i{
    color: black !important;
  }
}
.header-link{
  &:hover{
    color: #A00D06 !important;

    i{
      color: #A00D06 !important;
    }
  }
}
</style>
