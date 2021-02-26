<template>
  <landing v-if="!isAuthenticated" />

  <header v-if="isAuthenticated" class="container">
    <nav class="global__nav">
      <router-link to="/search"> Search</router-link>
      <router-link to="/new"> Create </router-link>
    </nav>
    <button @click="handleLogout">logout</button>
  </header>
  <router-view v-if="isAuthenticated" class="container page__content"> </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { injectUseIsAuthenticated } from './hooks/useIsAuthenticated';
import auth from './api/actions/auth';
import Landing from './pages/Landing.vue';

export default defineComponent({
  name: 'App',
  components: {
    Landing,
  },
  setup() {
    const { isAuthenticated, setIsAuthenticated } = injectUseIsAuthenticated();
    const handleLogout = () => {
      auth.logout('me@mail.de').then(setIsAuthenticated);
    };

    return {
      isAuthenticated,
      handleLogout: handleLogout,
    };
  },
  watch: {
    isAuthenticated(newVal, oldVal) {
      if (newVal) {
        this.$router.push('/search');
      } else if (newVal !== oldVal && !newVal) {
        this.$router.push('/');
      }
    },
  },
});
</script>

<style scoped>
header,
.global__nav {
  flex-basis: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  border-bottom: 1px solid black;
}

.global__nav-link {
  margin-right: 1rem;
}

.page__content {
  padding-top: 2rem;
}
</style>
