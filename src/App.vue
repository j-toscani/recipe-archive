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
import { defineComponent } from 'vue';
import { injectUseIsAuthenticated } from './lib/hooks/useIsAuthenticated';
import Landing from './pages/Landing.vue';

export default defineComponent({
  name: 'App',
  components: {
    Landing,
  },
  setup() {
    const { isAuthenticated } = injectUseIsAuthenticated();

    return {
      isAuthenticated,
    };
  },
  watch: {
    isAuthenticated(newVal, oldVal) {
      if (newVal) {
        this.$router.push('/home');
      } else if (newVal !== oldVal && !newVal) {
        this.$router.push('/');
      }
    },
  },
});
</script>
