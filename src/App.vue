<template>
  <div>
    <landing v-if="!isAuthenticated" />
    <template v-else>
      <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/search"> Search</router-link>
        <router-link to="/create"> Create</router-link>
      </nav>
      <router-view> </router-view>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import Landing from './pages/Landing.vue';
import useCheckPasswordRef from './lib/useCheckPasswordRef';

export default defineComponent({
  name: 'App',
  components: {
    Landing,
  },
  setup() {
    const isAuthenticated = useCheckPasswordRef('');

    function updateIsAuthenticated(password: string) {
      isAuthenticated.value = password;
    }

    provide('isAuthenticated', isAuthenticated);
    provide('updateIsAuthenticated', updateIsAuthenticated);

    return {
      isAuthenticated,
    };
  },
  watch: {
    isAuthenticated(val) {
      console.log('App:', val);
    },
  },
});
</script>
