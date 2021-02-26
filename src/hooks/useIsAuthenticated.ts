import { InjectionKey, inject, ref, Ref } from 'vue';
import ApiFetch from '../api/ApiFetch';
import { checkCooky } from '../lib/cookies';

function useIsAuthenticated(): {
  isAuthenticated: Ref<boolean>;
  setIsAuthenticated: () => void;
} {
  const token = checkCooky('me@mail.com');

  if (token) {
    ApiFetch.token = token;
  }

  const isAuthenticated = ref(token ? true : false);

  function setIsAuthenticated() {
    isAuthenticated.value = ApiFetch.token ? true : false;
  }
  return {
    isAuthenticated,
    setIsAuthenticated,
  };
}

type Auth = ReturnType<typeof useIsAuthenticated>;
export const AUTH: InjectionKey<Auth> = Symbol('store.auth');

export function injectUseIsAuthenticated() {
  const useIsAuthenticated = inject(AUTH);

  if (!useIsAuthenticated) {
    throw new Error('No Auth provider detected');
  }

  return useIsAuthenticated;
}

export default useIsAuthenticated;
