<template>
  <div class="card">
    <a href="https://www.youtube.com/watch?v=mNunrdp_epM" target="_blank"><img :src="props.image" alt="" /></a>
    <div class="content">
      <form v-on:submit.prevent="!isLoading && !isFormValid ? login() : null">
        <div class="text">
          <h1>Welcome back</h1>
          <p>Your machines have been waiting for you!</p>
        </div>

        <div class="fields">
          <input v-model="form.username" class="inputField" type="text" placeholder="Username" />
          <input v-model="form.password" class="inputField" type="password" placeholder="Password" />
          <p>Don’t have an account? <router-link :to="{ name: 'signup' }">Click here</router-link></p>
          <!-- <p>Forgot your password? <router-link :to="{ name: 'forgot' }">Click here</router-link></p> -->
        </div>

        <button type="submit" :class="{ disabled: isFormValid || isLoading }">
          Login
          <mdi:loading class="animate-spin" v-if="isLoading" />
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { api } from "@/modules/api";
import { computed, defineProps, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const props =
  defineProps<{
    image: string;
  }>();

const router = useRouter();

const form = reactive({
  username: "",
  password: "",
});
const isLoading = ref(false);

const isFormValid = computed(() => Object.values(form).some((field) => field == ""));

const login = async () => {
  isLoading.value = true;
  try {
    const status = await api.user.login(JSON.stringify(form));
    if (status == 200) router.push(`/dashboard/profile/${form.username}`);
  } catch (error) {
    console.log(error);
  }

  isLoading.value = false;
};
</script>
