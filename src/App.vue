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
import { defineComponent, inject } from 'vue';
import { AUTH } from './lib/hooks/useIsAuthenticated';
import Landing from './pages/Landing.vue';

export default defineComponent({
  name: 'App',
  components: {
    Landing,
  },
  setup() {
    const isAuthenticated = inject(AUTH);

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
