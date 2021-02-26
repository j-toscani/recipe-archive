import { customRef } from 'vue';

function useTimeoutRef(value: any, resetValue: any, delay = 200) {
  let timeout: NodeJS.Timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = resetValue;
          trigger();
        }, delay);
      },
    };
  });
}

export default useTimeoutRef;
