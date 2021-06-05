<template>
  <div class="view dashboard">
    <LoadingScreen :isLoaded="!isLoading" />
    <Header />
    <div class="main">
      <Nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LoadingScreen from "@/components/dashboard/LoadingScreen.vue";
import Header from "@/components/dashboard/Header.vue";
import Nav from "@/components/dashboard/Nav.vue";
import { computed } from "vue";

const isLoading = computed(() => {
  // return this.machines.size > 0 ? false : true;
  return false;
});
</script>

<style scoped>
.dashboard {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.dashboard .main {
  align-items: flex-start;
  display: flex;
  width: 100%;
  height: 100%;
}

.content {
  box-sizing: border-box;
  background-color: var(--white);
  padding: 8px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
  border-radius: 4px 0px 0px 0px;
}

.machines,
.informatics {
  display: flex;
  width: fit-content;
  flex-direction: row;
}

.informatics {
  gap: 8px;
}
</style>
