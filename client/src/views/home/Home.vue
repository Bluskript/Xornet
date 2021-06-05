<template>
  <div class="view home">
    <Header />
    <Main />
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/home/Header.vue";
import Main from "@/components/home/Main.vue";
</script>

<style scoped>
.home {
  min-width: 100%;
  min-height: 100%;
  background-color: var(--black);
  position: relative;
  height: 100%;
}
</style>
