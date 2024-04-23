<script lang="ts">
export default {
  name: 'AppFooter',
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    }
  },
  methods: {
    footerImage() {
      return this.$appState.darkTheme ? '/images/header/logo.svg' : '/images/header/logo.svg';
    }
  }
};
</script>

<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage()" height="20" class="mr-2">
    by
    <span class="font-medium ml-2">OshSU Academy</span>
  </div>
</template>

<style scoped>

</style>
