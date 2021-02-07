import { InjectionKey, inject } from 'vue';
import useCheckPasswordRef from '../refs/useCheckPasswordRef';

function useIsAuthenticated() {
  const isAuthenticated = useCheckPasswordRef('');

  function setIsAuthenticated(password: string) {
    isAuthenticated.value = password;
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
