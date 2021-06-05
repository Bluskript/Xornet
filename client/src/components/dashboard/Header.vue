<template>
  <header>
    <div class="logo">
      <img :src="logoHeader" alt="Xornet" />
    </div>

    <div class="buttons">
      <router-link :to="{ name: 'dashboard' }" class="button dashboard">
        <mdi:home />
      </router-link>
      <a href="https://github.com/Geoxor/Xornet/releases" target="_blank" class="button">
        <octicon:repo />
      </a>
      <div class="button" @click="isDark = !isDark">
        <mdi:theme-light-dark />
      </div>
      <div class="button" @click="showDetails = !showDetails" :class="{ enabled: showDetails }">
        <clarity:details-solid />
      </div>
      <!-- <div class="button" @click="showRogues = !showRogues" v-if="machines.some(machine => machine.rogue)" :class="{enabled: showRogues}">
            <img :src="import('@/assets/icons/rogue.svg')" alt="">
        </div> -->
      <div class="button" @click="thinButtons = !thinButtons">
        <whh:detailsalt v-if="thinButtons" />
        <whh:details v-else />
      </div>
    </div>

    <div class="account">
      <div class="button" @click="logout">
        <mdi:logout-variant />
      </div>
      <router-link :to="{ name: 'profile', params: { username } }">
        <img :src="profile?.profileImage?.url" class="profileImage" alt="profileImage" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import logoHeader from "@/assets/logos/logoHeader.svg"
import { isDark } from '@/services/theme'
import { token, username, thinButtons } from '@/services/localStorage'
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { api } from "@/modules/api";

const router = useRouter()

const profile = ref<{
  profileImage?: {
    url?: string
  }
} | null>(null)

const showDetails = ref(false)

onMounted(async () => {
  profile.value = await api.user.fetchMe()
})

function deleteAllCookies() {
  const cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

const logout = () => {
  deleteAllCookies()
  token.value = null
  router.push("/login")
}
</script>

<style scoped>
header {
  height: 48px;
  width: 100%;
  display: flex;
  background-color: var(--background-color);
}

header .logo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--theme-color);
  height: 48px;
  min-height: 48px;
  width: 48px;
  min-width: 48px;
}

header .buttons {
  width: 100%;
  align-items: center;
  display: flex;
}

header .button {
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

header .button:hover {
  /* filter: invert(0); */
  /* border: 1px solid var(--white); */
}

header .button.enabled {
  filter: invert(1);
  /* background-color: var(--rogue-red-border); */
}

header .button img {
  width: 24px;
  height: 24px;
  filter: invert(var(--filter));
}

header .account {
  display: flex;
  align-items: center;
  margin-right: 8px;
  justify-content: center;
}

header .account img.profileImage {
  width: 32px;
  height: 32px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
}
</style>
