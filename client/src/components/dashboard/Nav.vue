<template>
  <nav>
    <div class="buttons">
      <router-link :to="{ name: 'profile', params: { username } }" class="button">
        <mdi:account />
      </router-link>
      <router-link :to="{ name: 'summary' }" class="button">
        <codicon:dashboard />
      </router-link>
      <router-link :to="{ name: 'machines' }" class="button">
        <zondicons:servers />
      </router-link>
      <router-link :to="{ name: 'network' }" class="button">
        <carbon:network-4 />
      </router-link>
      <router-link :to="{ name: 'logs' }" class="button">
        <mdi:clipboard />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { username } from "@/services/localStorage";
</script>

<style scoped>
nav {
  height: 48px;
  width: 48px;
  display: flex;
}

nav .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-color);
  height: 48px;
  width: 48px;
}

nav .buttons {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
}

nav .buttons .button {
  padding: 16px;
  background-color: var(--background-color);
  box-sizing: border-box;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: 100ms ease;
  text-decoration: none;
  user-select: none;
}

nav .buttons .button.router-link-active {
  background-color: var(--theme-color);
}

nav .buttons .button.router-link-active img {
  filter: invert(1);
}

nav .buttons .button:hover {
  border: 1px solid var(--white);
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 20px;
}

nav .buttons .button:active {
  transform: translateY(-0px);
}
nav .buttons .button.enabled {
  filter: invert(1);
  /* background-color: var(--rogue-red-border); */
}

nav .buttons .button img {
  width: 24px;
  height: 24px;
  filter: invert(var(--filter));
}
</style>
