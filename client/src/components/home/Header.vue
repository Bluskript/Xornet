<template>
  <header :class="route.name === 'home' ? 'view-home' : 'view-login'">
    <router-link :to="{ name: 'home' }">
      <img :src="route.name === 'home' ? logo : logo2" alt="Xornet" />
    </router-link>
    <div class="buttons">
      <router-link class="button" :to="{ name: 'home', params: { page: 'about' } }">
        <bi:question-circle alt="details" />
        What is Xornet
      </router-link>
      <a class="button" href="https://github.com/Geoxor/Xornet" target="_blank">
        <octicon:repo alt="repo" />
        Repository
      </a>
      <router-link class="button" :to="{ name: 'home', params: { page: 'downloads' } }">
        <ic:round-download-for-offline alt="download" />
        Downloads
      </router-link>
      <router-link class="button" v-if="isLoggedIn" :to="{ name: 'machines' }">
        <img :src="dash" alt="dash" />
        Dashboard
      </router-link>
      <router-link class="button" v-if="!isLoggedIn" :to="{ name: 'login' }">
        <ant-design:login-outlined alt="login" />
        Login
      </router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { token } from "@/services/localStorage";
import { computed } from "vue";
import { useRoute } from "vue-router";
import dash from "@/assets/icons/dash.png";
import logo from "@/assets/logos/logo.svg";
import logo2 from "@/assets/logos/logo2.svg";

const route = useRoute();
const isLoggedIn = computed(() => token === null);
</script>

<style scoped>
header {
  z-index: 1000;
  position: fixed;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: var(--white); */
}
.view-home {
  padding: 8px 10vw;
}
.view-login {
  padding: 8px 4vw;
}
header .buttons {
  display: flex;
  height: 100%;
  gap: 8px;
}
header .buttons .button {
  color: white;
  border: none;
  background-color: #4361ee;
  width: min-content;
  padding: 4px 12px;
  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  line-height: 175%;
  transition: 100ms ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  text-decoration: none;
}
header .buttons .button:hover {
  box-shadow: 0px 4px 12px #4361ee80;
  transform: translateY(-1px);
}
header .buttons .button:active {
  transform: translateY(1px);
}
header .buttons .button img {
  filter: invert(1);
  width: 24px;
  height: 24px;
}
</style>
